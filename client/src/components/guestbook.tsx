import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { queryClient, apiRequest } from '@/lib/queryClient';
import { type GuestbookEntry } from '@shared/schema';
import { useToast } from '@/hooks/use-toast';

export function Guestbook() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const { data: entries = [], isLoading } = useQuery<GuestbookEntry[]>({
    queryKey: ['/api/guestbook'],
  });

  const createEntryMutation = useMutation({
    mutationFn: async (data: { name: string; email?: string; message: string }) => {
      const response = await apiRequest('POST', '/api/guestbook', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/guestbook'] });
      setName('');
      setEmail('');
      setMessage('');
      toast({
        title: "Message added! ✨",
        description: "Thanks for signing my guestbook!",
      });
    },
    onError: () => {
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast({
        title: "Please fill in required fields",
        description: "Name and message are required!",
        variant: "destructive",
      });
      return;
    }
    createEntryMutation.mutate({
      name: name.trim(),
      email: email.trim() || undefined,
      message: message.trim(),
    });
  };

  const formatDate = (dateString: string | Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <section className="retro-container p-8 mb-8">
      <h2 className="font-comic text-4xl text-red-800 mb-6 text-center">
        Sign My Guestbook!
      </h2>
      <p className="text-center mb-6 font-verdana text-black">Leave me a message like the good old days!</p>
      
      {/* Display existing entries */}
      <div className="mb-6 max-h-80 overflow-y-auto">
        {isLoading ? (
          <div className="text-center text-black">Loading messages...</div>
        ) : entries.length === 0 ? (
          <div className="text-center text-black font-comic">No messages yet! Be the first to sign! ✨</div>
        ) : (
          entries.map((entry, index) => (
            <div 
              key={entry.id} 
              className={`${
                index % 2 === 0 ? 'bg-yellow-200' : 'bg-cyan-200'
              } border-2 outset border-gray-400 p-4 mb-4`}
            >
              <div className="flex justify-between items-start mb-2">
                <strong className="font-comic text-blue-800">{entry.name}</strong>
                <span className="text-xs text-gray-800">{formatDate(entry.createdAt)}</span>
              </div>
              <p className="text-black font-verdana">{entry.message}</p>
            </div>
          ))
        )}
      </div>
      
      {/* Guestbook form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Your Name *" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border-2 inset border-gray-400 font-verdana text-black"
            required
          />
          <input 
            type="email" 
            placeholder="Your Email (optional)" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border-2 inset border-gray-400 font-verdana text-black"
          />
        </div>
        <textarea 
          placeholder="Leave your message here! *" 
          rows={4} 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border-2 inset border-gray-400 font-verdana text-black"
          required
        />
        <button 
          type="submit" 
          disabled={createEntryMutation.isPending}
          className="myspace-btn font-comic px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {createEntryMutation.isPending ? 'Signing...' : 'Sign Guestbook!'}
        </button>
      </form>
    </section>
  );
}

import { useNavigate } from 'react-router-dom';
import { ChatWindow } from '../components/chat/ChatWindow';
import { Navbar } from '../components/layout/Navbar';
import { Sidebar } from '../components/layout/Sidebar';
import { useAuth } from '../context/AuthContext';
import { useChat } from '../hooks/useChat';

export function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  if (!user) return null;

  const { messages, isTyping, sendMessage, messagesEndRef } = useChat(user.email);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-violet-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-violet-300/15 blur-3xl" />
        <div className="absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-blue-300/15 blur-3xl" />
      </div>

      <Navbar email={user.email} onLogout={handleLogout} />

      <main className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="mb-6 lg:hidden">
          <div className="flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50/80 px-3 py-1.5 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-emerald-700">AI Assistant Connected</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px] lg:gap-8">
          <section className="animate-fade-in min-w-0">
            <ChatWindow
              messages={messages}
              isTyping={isTyping}
              onSend={sendMessage}
              messagesEndRef={messagesEndRef}
            />
          </section>

          <Sidebar email={user.email} lastLogin={user.lastLogin} />
        </div>
      </main>
    </div>
  );
}

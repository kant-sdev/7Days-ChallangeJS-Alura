interface ConsoleOutputProps {
  message: string
}

export function ConsoleOutput({ message }: ConsoleOutputProps) {
  if (!message) return null;
  
  return (
    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
      <div className="text-gray-400 text-sm mb-2">Console:</div>
      <div className="font-mono text-green-400">{message}</div>
    </div>
  )
}
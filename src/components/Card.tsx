interface CardProps {
  name: string;
  id: number;
  selectedId: number | null;
  onSend: (v: number) => void;
}

export default function Card({ name, id, selectedId, onSend }: CardProps) {
  function handleClick() {
    onSend(id);
  }
  return (
    <div
      onClick={handleClick}
      style={{ border: selectedId === id ? "2px solid gold" : "none" }}
      className="max-w-xs bg-gray-50 rounded-xl shadow-sm p-3 hover:shadow-md transition-shadow duration-300 mb-2.5"
    >
      <p className="text-sm text-gray-700">
        <span className="font-medium text-gray-900">Name:</span>
        {name}
      </p>
    </div>
  );
}

// src/components/ui/card.jsx

export function Card({ children, className = "" }) {
    return (
      <div className={`border rounded-xl p-4 shadow-sm bg-white ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children, className = "" }) {
    return (
      <div className={`mt-2 text-sm text-gray-700 ${className}`}>
        {children}
      </div>
    );
  }
  
/* eslint-disable react/prop-types */
export function InputBox({ label, placeholder }) {
  return (
    <div className="px-4 py-2">
      <label className="text-sm font-medium text-left py-2 block">
        {label}
      </label>
      <input
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder={placeholder}
      />
    </div>
  );
}

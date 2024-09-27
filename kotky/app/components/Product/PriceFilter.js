import CheckBoxItem from "../UI/CheckBoxItem";

export default function PriceFilter() {
  const colors = [
    {
      name: "Red",
      quantity: "50",
    },
    {
      name: "Green",
      quantity: "25",
    },
    {
      name: "Blue",
      quantity: "43",
    },
  ];
  const Conditions = [
    {
      name: "New",
      quantity: "1050",
    },
    {
      name: "Refurbished",
      quantity: "25",
    },
    {
      name: "Used",
      quantity: "43",
    },
  ];

  return (
    <div className="w-[285px] h-fit bg-white shadow-custom border border-[#ececec] p-5 rounded-2xl">
      <h1 className="text-[#253D4E] text-2xl font-bold border-b border-b-[#ececec] pb-3 relative">
        Fill by price
        <span className="absolute bottom-0 left-0 w-2/5 h-[2px] bg-[#BCE3C9]" />
      </h1>
      <div>
        <div className="space-y-2 mt-2">
          <h3 className="font-bold text-xl">Color</h3>
          {colors.map((color, i) => (
            <CheckBoxItem key={i} item={color} />
          ))}
        </div>
        <div className="space-y-2 mt-2">
          <h3 className="font-bold text-xl">Item Condition</h3>
          {Conditions.map((condition, i) => (
            <CheckBoxItem key={i} item={condition} />
          ))}
        </div>
      </div>
    </div>
  );
}

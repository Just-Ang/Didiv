export const filtersConfig = {
  bikes: [
    { type: "checkbox", name: "brand", label: "Бренд" },
    { type: "checkbox", name: "wheelSize", label: "Розмір колеса" },
    { type: "range", name: "price", label: "Ціна" },
  ],

  saddles: [
    { type: "checkbox", name: "gender", label: "Тип (чол/жін)" },
    { type: "checkbox", name: "material", label: "Матеріал" },
    { type: "range", name: "price", label: "Ціна" },
  ],

  handlebars: [
    { type: "checkbox", name: "width", label: "Ширина" },
    { type: "checkbox", name: "material", label: "Матеріал" },
  ],
   wheels: [
    { type: "checkbox", name: "brand", label: "Бренд", options: ["Shimano", "Campagnolo", "SRAM"] },
    { type: "checkbox", name: "wheelSize", label: "Розмір колеса", options: ["26`", "27.5`", "29`"] },
    { type: "range", name: "price", label: "Ціна", min: 1000, max: 10000 },
    
  ],
};
const transportOptions = {
    data: {
      car: { amount: 100, description: "Car" },
      bus: { amount: 50, description: "Bus" },
      bike: { amount: 10, description: "Bicycle" },
      airplane: { amount: 500, description: "Airplane" },
      helicopter: { amount: 200, description: "Helicopter" },
      boat: { amount: 200, description: "Boat" },
      ship: { amount: 400, description: "Ship" },
      yacht: { amount: 1000, description: "Yacht" },
    },
    transportType: {
      car: "land",
      bus: "land",
      bike: "land",
      airplane: "air",
      helicopter: "air",
      boat: "maritime",
      ship: "maritime",
      yacht: "maritime",
    },
  };

const {data, transportType} = transportOptions;

const formatted = {
    data:{},
    keys: Object.keys(data),
    transportType: new Set()
  };

  for (const key in data) {
    formatted.data = { ...formatted.data, [key]: { ...data[key], type: transportType[key]} }
    formatted.transportType.add(String(transportType[key]).toUpperCase());
  }

  export {formatted as transportOptionsFormatted}
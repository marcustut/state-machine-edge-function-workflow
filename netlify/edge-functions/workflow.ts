import { createMachine } from "https://cdn.skypack.dev/xstate";

const trafficLightMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBcBOBDAZpglgYwBkcoALZAOilTDADsBiAUQDc7kACARkVAAcB7WDmQ5+tHiAAeiAMydO5AEwAWAJydlABgBsAdk0BWA9pUAaEAE9EAWjXlN+1QdUvNqgBybNMgL4-zaFi4hMRk5BZgADaR-ADuTKy0HIoSAkIiYhLSCNoa5O6qMu7FMtp6TqrmVgi65LqqOsoF2pqKLQbKyn4BGNj4RKQU1BAJbOwpSCBpwqLik9kq2uQeXtoyKoYGMq1ViJyKmssGirruWsrHBu4Gfv4gtPwQcBKBfSGDlNR0qYIzmfN7Mp1dycLYGTQFIqqRTuXYIazadzkZT1GQyVTaNSgzzabogV7BAZhCLROI-dKzLKIZQtexqByKRScPTM2GWGxGey6GQdLYOUqaUG4u4E-qhIaQcl-OagbImZRKYrKRSXeScHlw+QKpyC056MoGTjuXwi3qE8VSjIyqR7ZXA0E8iGFAowuHWDSHGm6EyNFlNYV+IA */
  createMachine({
    schema: {
      events: {} as { type: "eventType" },
    },
    id: "trafficLight",
    initial: "green",
    states: {
      green: {
        on: {
          "Event 1": {
            target: "yellow",
          },
        },
      },
      yellow: {
        on: {
          "Event 2": {
            target: "red",
          },
        },
      },
      red: {
        on: {
          "Event 2": {
            target: "green",
          },
        },
      },
    },
  });

export default async () => {
  return new Response("Hello from the edge");
};

import * as yup from "yup";

export const ProfitSettingSchema = yup.object().shape({
  nonVipProfit: yup.string().required("Non-VIP profit is required"),
  goldVipProfit: yup.string().required("Gold-VIP profit is required"),
  diamondVipProfit: yup.string().required("Diamond-VIP profit is required"),
  nonVipMinimumProfit: yup.string().required("Non-VIP minimum profit is required"),
  goldVipMinimumProfit: yup.string().required("Gold-VIP minimum profit is required"),
  diamondVipMinimumProfit: yup.string().required("Diamond-VIP minimum profit is required"),
});

export type ProfitSettingSchema = yup.InferType<typeof ProfitSettingSchema>;

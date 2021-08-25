export interface Shift {
  id: string;
  title: string;
  date: string;
  time: string;
  specialPay: boolean;
};

export const emptyShift = {
  id: '',
  title: '',
  date: '',
  time: '',
  specialPay: false
};

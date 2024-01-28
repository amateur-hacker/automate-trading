import { Dispatch, SetStateAction } from "react";
import { InputType } from "reactstrap/types/lib/Input";

export interface CommonCardFooterProps {
  align?: string;
  color?: string;
}

export interface DatePickerInterFace {
  startDate?: Date;
  handleChange: (data: Date) => void;
}

export interface FormWidgetsDatePickerProps {
  startDate: Date | null;
  setStartDate?: Date | null;
  handleChange: (date: Date) => void;
}

export interface CommonTouchspinProps {
  decimal?: number;
  val: number;
  step?: number;
  vertical?: boolean;
  setVal(value: number): void;
}

export interface CommonMultipleSelectBoxPropsType {
  inputClassName: string;
  inputId?: string;
  defaultValue?: string;
}

export interface DatePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  setDateRange: Dispatch<SetStateAction<[Date | null, Date | null]>>;
}

export interface PredefinedRangesProps {
  startDate1: string;
  handleChange: (date: string) => void;
}

export interface SingleDatePicker {
  startDate1: Date;
  handleChange: (date: Date) => void;
}

export interface CommonFormGroupProps {
  label: string | undefined;
  ColSm: number;
  InputType: InputType;
  placeholder?: string;
  InputClass?: string;
  defaultValue?: string;
  maxLength?: number;
  labelClass?: string;
  inlineStyle?: string;
  id?: string;
}

export interface BirthDateProps {
  goSteps: number;
  setGoSteps: (value: number) => void;
}

export interface EmailProps {
  goSteps: number;
  setGoSteps: (value: number) => void;
}

export interface RegistrationFormProps {
  setGoSteps: (value: number) => void;
}

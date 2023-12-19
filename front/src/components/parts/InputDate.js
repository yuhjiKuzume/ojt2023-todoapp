import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja";

registerLocale("ja", ja);

export const InputDate = ({ value, handleChange }) => {
    const initialDate = new Date();
    // const [startDate, setStartDate] = useState();

    // const handleChange = (date) => {
    //     setStartDate(date);
    // };

    return (
        <div>
            <div>
                <DatePicker
                    locale="ja"
                    name="limit"
                    selected={value}
                    dateFormatCalendar="yyyy年 MM月"
                    dateFormat="yyyy/MM/dd"
                    onChange={handleChange}
                    minDate={initialDate}
                    autoComplete="off"
                    className="block w-full rounded-md border py-1.5 pl-2 my-2 text-gray-900 border-neutral-400 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                />
            </div>
        </div>
    );
};

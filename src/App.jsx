import React, { useState, useRef } from 'react'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css' // базовые стили
import 'react-date-range/dist/theme/default.css' // тема по умолчанию
// import { useOnClickOutside } from './useOnClickOutside' // хук для закрытия при клике снаружи

const CustomDateRangePicker = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedRange, setSelectedRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ])

    const ref = useRef(null)
    // useOnClickOutside(ref, () => setIsOpen(false)) // Закрытие при клике снаружи

    const toggleModal = () => setIsOpen(!isOpen)

    const handleApply = () => {
        console.log("Выбранные даты:", selectedRange[0].startDate, "-", selectedRange[0].endDate)
        setIsOpen(false)
    }

    return (
        <div className="relative">
            <button
                onClick={toggleModal}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
                Выбрать даты
            </button>

            {isOpen && (
                <div className="w-[1049px] h-[340px] rounded-[8px] border-[1px] p-0 gap-4 grid grid-cols-4" ref={ref}>
                    {/* Предустановленные диапазоны */}
                    <div className="relative min-w-[224px] h-[340px] p-4 border-r flex flex-col items-start">
                        <button
                            className="text-sm font-sans block mb-2 h-[33px]"
                            onClick={() =>
                                setSelectedRange([
                                    {
                                        startDate: new Date(),
                                        endDate: new Date(),
                                        key: 'selection',
                                    },
                                ])
                            }
                        >
                            Сегодня
                        </button>
                        <button
                            className="text-sm font-sans block mb-2 h-[33px]"
                            onClick={() =>
                                setSelectedRange([
                                    {
                                        startDate: new Date(Date.now() - 86400000),
                                        endDate: new Date(),
                                        key: 'selection',
                                    },
                                ])
                            }
                        >
                            Вчера
                        </button>
                        <button
                            className="text-sm  font-sans block mb-2 h-[33px]"
                            onClick={() =>
                                setSelectedRange([
                                    {
                                        startDate: new Date(Date.now() - 7 * 86400000),
                                        endDate: new Date(),
                                        key: 'selection',
                                    },
                                ])
                            }
                        >
                            Последние 7 дней
                        </button>
                        <button
                            className="text-sm font-sans block mb-2 h-[33px]"
                            onClick={() =>
                                setSelectedRange([
                                    {
                                        startDate: new Date(Date.now() - 30 * 86400000),
                                        endDate: new Date(),
                                        key: 'selection',
                                    },
                                ])
                            }
                        >
                            Последние 30 дней
                        </button>
                        <button
                            className="text-sm font-sans block mb-2 h-[33px]"
                            onClick={() =>
                                setSelectedRange([
                                    {
                                        startDate: new Date(Date.now() - 90 * 86400000),
                                        endDate: new Date(),
                                        key: 'selection',
                                    },
                                ])
                            }
                        >
                            Последние 90 дней
                        </button>
                        <div className="absolute bottom-10 gap-6 pt-5 mt-5 border-t flex min-w-[224px] h-[32px]">
                            <button
                                onClick={handleApply}
                                className="bg-[#0076F5] font-sans font-medium text-white text-sm rounded-[4px] w-[105px] h-[32px]"
                            >
                                Применить
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className=" text-[#0076F5] font-sans font-medium  text-sm rounded-[4px] w-[105px] h-[32px]"
                            >
                                Отменить
                            </button>
                        </div>
                    </div>

                    {/* Календарь */}
                    <div className="w-[776px] h-[243px] col-span-3 p-0">
                        <DateRange
                            ranges={selectedRange}
                            onChange={(item) => setSelectedRange([item.selection])}
                            months={3}
                            direction="horizontal"
                            showMonthAndYearPickers={true}
                            showDateDisplay={false}
                            moveRangeOnFirstSelection={false}
                            fixedHeight={false}
                            style={{ maxHeight: '700px', width: '243px' }}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default CustomDateRangePicker

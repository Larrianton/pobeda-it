import {useState} from "react";

export const useSelectHandler = () => {
    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState<string>(" ")
    const toggleItems = () => setActive(!active)
    return {active, setActive, hoveredElementValue, setHoveredElementValue, toggleItems}
};


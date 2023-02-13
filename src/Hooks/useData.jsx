import React, { useEffect, useState } from "react";

const useData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/Pblogs.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    const value = { data, setData };
    return value;
};

export default useData;

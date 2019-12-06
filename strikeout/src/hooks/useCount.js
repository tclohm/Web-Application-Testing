import { useState } from "react";

const useCount = (initialValue) => {
	const [count, setCount] = useState(initialValue);
	return [count, setCount];
};

export default useCount;
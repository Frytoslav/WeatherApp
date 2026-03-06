function useDynamicBackground (weatherId: number | null | undefined) {
    if (!weatherId) return "";

    if (weatherId == 800) {
        return "with-sun-rays";
    }
    return "";
}

export { useDynamicBackground };
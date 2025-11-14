import React, { useState, useEffect, useRef } from "react";

export default function AnimatedCounters() {
    const [startAnimation, setStartAnimation] = useState(false);
    const ref = useRef(null);

    // Intersection observer – trigger animation when visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) setStartAnimation(true);
            },
            { threshold: 0.3 } // trigger when 30% visible
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    // ✅ Unified counter hook – both perfectly sync
    const useCounter = (finalCount, shouldAnimate, duration = 2000) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!shouldAnimate) return;

            const fps = 60; // smooth 60fps
            const interval = 1000 / fps;
            const totalSteps = Math.floor(duration / interval);
            const step = finalCount / totalSteps;
            let current = 0;

            const timer = setInterval(() => {
                current += step;
                if (current >= finalCount) {
                    current = finalCount;
                    clearInterval(timer);
                }
                setCount(Math.floor(current));
            }, interval);

            return () => clearInterval(timer);
        }, [finalCount, shouldAnimate, duration]);

        return count;
    };

    // Both counters now sync to the same total duration (2 seconds)
    const yearsExperience = useCounter(40, startAnimation, 2000);
    const satisfiedCustomers = useCounter(5000, startAnimation, 2000);

    return (
        <div
            ref={ref}
            className="antialiased min-h-[50vh] flex flex-col sm:flex-row justify-evenly items-center text-center space-y-10 sm:space-y-0 sm:space-x-16 "
        >
            {/* Years of Experience */}
            <div className="flex flex-col items-center w-auto text-center whitespace-nowrap">
                <span className="text-5xl font-extrabold text-[#16561A]">
                    {yearsExperience}+
                </span>
                <p className="text-2xl md:text-3xl font-bold text-black leading-tight tracking-wide mt-1">
                    Years of Experience
                </p>
            </div>

            {/* Satisfied Customers */}
            <div className="flex flex-col items-center w-auto text-center whitespace-nowrap">
                <span className="text-5xl font-extrabold text-[#16561A]">
                    {satisfiedCustomers}+
                </span>
                <p className="text-2xl md:text-3xl font-bold text-black mb-0 leading-tight tracking-wide">
                    Satisfied Customers
                </p>
            </div>
        </div>
    );
}

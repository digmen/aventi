'use client'
import React, { useState, useEffect } from 'react';

export default function Time() {
    const [times, setTimes] = useState({
        sofia: '',
        kyrgistan: '',
        riga: '',
        california: ''
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setTimes({
                sofia: now.toLocaleTimeString('en-US', { timeZone: 'Europe/Sofia', hour: '2-digit', minute: '2-digit', hour12: false }),
                kyrgistan: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Bishkek', hour: '2-digit', minute: '2-digit', hour12: false }),
                riga: now.toLocaleTimeString('en-US', { timeZone: 'Europe/Riga', hour: '2-digit', minute: '2-digit', hour12: false }),
                california: now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', hour12: false })
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <article className='flex justify-around w-full'>
            <span className='text-secondary'>{times.sofia} Sofia</span>
            <span className='text-secondary'>{times.kyrgistan} Kyrgyzstan</span>
            <span className='text-secondary'>{times.riga} Riga</span>
            <span className='text-secondary'>{times.california} California</span>
        </article>
    );
}

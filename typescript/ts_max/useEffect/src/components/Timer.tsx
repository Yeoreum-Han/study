import Container from './UI/Container.tsx';
import { useTimersContext, type Timer as TimerProps } from '../store/timers-context.tsx';
import { useEffect, useRef, useState } from 'react';

export default function Timer({ name, duration }: TimerProps) {
  const [remainingTime, setRemainingTime] = useState(duration * 1000);

  //useEffect 내부의 interval에 접근하기 위해 useRef를 사용
  const interval = useRef<number | null>(null);

  //일시정지기능
  const { isRunning } = useTimersContext();

  // 0초이하 일때 인터벌 clear하기
  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      //retrun으로 인터벌이 종료되게 코드를 작성한다.
      timer = setInterval(function () {
        setRemainingTime(prev => prev - 50);
      }, 50);
      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p><progress max={duration * 1000} value={remainingTime} /></p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}

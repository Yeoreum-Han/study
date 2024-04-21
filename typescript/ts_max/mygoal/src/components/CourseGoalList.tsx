import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";
import { type ReactNode } from "react";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  // goal이 하나도 없을 때, 적당할때, 너무 많을때를 나누어 return
  // mode='hint'일 경우엔 severity가 의미 없지만 ts는 오류로 간주, warning일때만 쓰려면 d

  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        Add your goals
      </InfoBox>
    )
  }

  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (<InfoBox mode="warning" severity="medium">You have too many goals.</InfoBox>);
  }

  return (
    <>
      {warningBox}
      <ul>
        {
          goals.map((goal) => (
            <li key={goal.id}>
              <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                <p>{goal.description} </p>
              </CourseGoal>
            </li>
          ))
        }
      </ul >
    </>
  )
}
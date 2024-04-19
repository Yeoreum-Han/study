import { useRef, type FormEvent } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
}

export default function NewGoal({ onAddGoal }: NewGoalProps) {
    const inputGoal = useRef<HTMLInputElement>(null);
    const inputSummary = useRef<HTMLInputElement>(null);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const enteredGoal = inputGoal.current!.value;
        const enteredSummary = inputSummary.current!.value;

        e.currentTarget.reset();
        onAddGoal(enteredGoal, enteredSummary);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input id="goal" type="text" ref={inputGoal} />
            </p>
            <p>
                <label htmlFor="summary">Short summary</label>
                <input id="summary" type="text" ref={inputSummary} />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    )
}
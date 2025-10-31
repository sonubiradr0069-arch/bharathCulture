import { useState } from 'react'
import QuizQuestion from '../QuizQuestion'

export default function QuizQuestionExample() {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  return (
    <div className="p-6 max-w-3xl">
      <QuizQuestion
        question="Which Indian festival is known as the Festival of Lights?"
        options={["Holi", "Diwali", "Navratri", "Pongal"]}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={setSelectedAnswer}
        showResult={false}
      />
    </div>
  )
}

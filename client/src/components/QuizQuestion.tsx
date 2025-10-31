import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface QuizQuestionProps {
  question: string;
  options: string[];
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  correctAnswer?: number;
  showResult: boolean;
}

export default function QuizQuestion({ 
  question, 
  options, 
  selectedAnswer, 
  onSelectAnswer,
  correctAnswer,
  showResult
}: QuizQuestionProps) {
  return (
    <Card data-testid="card-quiz-question">
      <CardContent className="p-8">
        <h3 className="text-2xl font-semibold mb-6" data-testid="text-question">
          {question}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = showResult && correctAnswer === index;
            const isWrong = showResult && isSelected && correctAnswer !== index;
            
            return (
              <Button
                key={index}
                variant={isSelected && !showResult ? "default" : "outline"}
                className={`min-h-16 text-left justify-start p-4 ${
                  isCorrect ? "border-green-500 bg-green-50 dark:bg-green-950" : ""
                } ${
                  isWrong ? "border-red-500 bg-red-50 dark:bg-red-950" : ""
                }`}
                onClick={() => !showResult && onSelectAnswer(index)}
                disabled={showResult}
                data-testid={`button-option-${index}`}
              >
                <span className="mr-3 font-semibold">{String.fromCharCode(65 + index)}.</span>
                <span>{option}</span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

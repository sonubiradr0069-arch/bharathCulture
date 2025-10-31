import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuizQuestion from "@/components/QuizQuestion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

const quizQuestions: Question[] = [
  {
    question: "Which Indian festival is known as the Festival of Lights?",
    options: ["Holi", "Diwali", "Navratri", "Pongal"],
    correctAnswer: 1
  },
  {
    question: "What is the traditional art form of wax-resist dyeing on fabric from Indonesia?",
    options: ["Shibori", "Batik", "Ikat", "Tie-dye"],
    correctAnswer: 1
  },
  {
    question: "Which ancient civilization built Machu Picchu?",
    options: ["Aztec", "Maya", "Inca", "Olmec"],
    correctAnswer: 2
  },
  {
    question: "What is the Japanese art of paper folding called?",
    options: ["Origami", "Ikebana", "Calligraphy", "Kirigami"],
    correctAnswer: 0
  },
  {
    question: "Which traditional Indian art form uses intricate patterns drawn on floors and walls?",
    options: ["Warli", "Rangoli", "Madhubani", "Pattachitra"],
    correctAnswer: 1
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(quizQuestions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(quizQuestions.length).fill(null));
    setShowResults(false);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer !== null && answer === quizQuestions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const score = calculateScore();
  const percentage = Math.round((score / quizQuestions.length) * 100);

  if (showResults) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1 py-12 md:py-20">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <Card>
              <CardContent className="p-8 md:p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                  <Trophy className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Quiz Complete!</h2>
                <p className="text-6xl md:text-7xl font-bold text-primary mb-4" data-testid="text-score">
                  {score}/{quizQuestions.length}
                </p>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  You scored {percentage}%
                </p>
                
                <div className="space-y-6 mb-8 text-left">
                  <h3 className="text-xl font-semibold text-center mb-4">Review Your Answers</h3>
                  {quizQuestions.map((q, index) => {
                    const userAnswer = selectedAnswers[index] ?? 0;
                    return (
                      <div key={index} className="p-4 bg-muted/50 rounded-lg">
                        <p className="font-medium mb-2">{index + 1}. {q.question}</p>
                        <p className={`text-sm ${userAnswer === q.correctAnswer ? "text-green-600" : "text-red-600"}`}>
                          Your answer: {q.options[userAnswer]}
                        </p>
                        {userAnswer !== q.correctAnswer && (
                          <p className="text-sm text-green-600">
                            Correct answer: {q.options[q.correctAnswer]}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                <Button size="lg" onClick={handleRestart} data-testid="button-restart">
                  Take Quiz Again
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Cultural Knowledge Quiz
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Test your knowledge about world cultures, traditions, and heritage
            </p>
          </div>

          <div className="mb-6">
            <div className="flex gap-2 mb-4">
              {quizQuestions.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 flex-1 rounded-full transition-colors ${
                    index <= currentQuestion ? "bg-primary" : "bg-muted"
                  }`}
                  data-testid={`progress-segment-${index}`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </p>
          </div>

          <QuizQuestion
            question={quizQuestions[currentQuestion].question}
            options={quizQuestions[currentQuestion].options}
            selectedAnswer={selectedAnswers[currentQuestion]}
            onSelectAnswer={handleAnswerSelect}
            showResult={false}
          />

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              data-testid="button-previous"
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === null}
              data-testid="button-next"
            >
              {currentQuestion === quizQuestions.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

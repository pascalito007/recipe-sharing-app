import { Step } from '@/types/recipe';

interface StepsTimelineProps {
  steps: Step[];
}

export default function StepsTimeline({ steps }: StepsTimelineProps) {
  const sortedSteps = [...steps].sort((a, b) => a.stepNumber - b.stepNumber);

  return (
    <div className="relative">
      <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-300 to-primary-400"></div>
      
      <div className="space-y-8">
        {sortedSteps.map((step, index) => (
          <div key={step.id} className="relative flex items-start gap-6">
            <div className="relative z-10 flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                {step.stepNumber}
              </div>
              {index < sortedSteps.length - 1 && (
                <div className="absolute top-12 left-1/2 w-0.5 h-8 bg-primary-200 transform -translate-x-1/2"></div>
              )}
            </div>
            
            <div className="flex-grow min-w-0 pt-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {step.instruction}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex items-center justify-center">
        <div className="flex items-center gap-2 text-primary-600">
          <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
          <span className="text-sm font-medium">Recette terminée !</span>
          <div className="w-8 h-0.5 bg-gradient-to-r from-primary-300 to-primary-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
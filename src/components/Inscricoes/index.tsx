import  { useState } from 'react';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import { DadosPessoais } from './steps/DadosPessoais';
import { DadosInstitucionais } from './steps/DadosInstitucionais';
import { AnexarDocumentos } from './steps/AnexarDocumentos';
import { Pagamento } from './steps/Pagamento';
import { DadosAcademicos } from './steps/DadosAcademicos';

export  function Inscricoes() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    step1Data: '',
    step2Data: '',
    step3Data: '',
    step4Data: '',
    step5Data: '',
  });

  const handleNextStep = () => setCurrentStep(prev => prev + 1);
  const handlePreviousStep = () => setCurrentStep(prev => prev - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-start px-4 mx-4 rounded shadow py-12">
      <div className="w-full">
        {[1, 2, 3, 4, 5].map(step => (
          <div key={step} className="flex items-center w-full">
            <div className={`w-8 h-8 shrink-0 mx-[-1px] p-1.5 flex items-center justify-center rounded-full 
              ${currentStep >= step ? 'bg-blue-600' : 'bg-gray-300'}`}>
              <span className="text-base text-white font-bold">{step}</span>
            </div>
            {step < 5 && (
              <div className={`w-full h-[2px] mx-4 rounded-lg ${currentStep > step ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
            )}
          </div>
        ))}
      </div>

      <div className="w-full mt-6">
        {currentStep === 1 && (
          <DadosPessoais formData={formData} handleChange={handleChange} handleNextStep={handleNextStep} />
        )}
        {currentStep === 2 && (
          <DadosInstitucionais
            formData={formData}
            handleChange={handleChange}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 3 && (
          <DadosAcademicos
            formData={formData}
            handleChange={handleChange}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 4 && (
          <AnexarDocumentos
            formData={formData}
            handleChange={handleChange}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 5 && (
          <Pagamento
            formData={formData}
            handleChange={handleChange}
            handlePreviousStep={handlePreviousStep}
          />
        )}
      </div>
    </div>
  );
}



// import { Card, CardContent } from "@/components/ui/card";
import { Card, CardContent } from "./ui/card";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

const processSteps = [
  {
    title: "지표 선택",
    status: "success",
    detail: "선택 완료"
  },
  {
    title: "Source SQL 실행",
    status: "success",
    detail: "1,200건 조회됨"
  },
  {
    title: "수식 처리",
    status: "success",
    detail: "평균값 계산 성공 (154.2ms)"
  },
  {
    title: "저장",
    status: "success",
    detail: "DB에 저장 완료"
  },
  {
    title: "SLA 취합",
    status: "fail",
    detail: "목표치 미달 (93.2% < 95%)"
  }
];

export default function IndicatorProcessFlow() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-6xl w-full p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-8 text-center">지표 수집 실행 프로세스</h2>
        <div className="flex flex-row items-start justify-start space-x-4 overflow-x-auto px-2">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <Card className="flex flex-col items-center w-48 p-4 gap-2 border border-gray-200 bg-white shadow-sm rounded-lg min-w-[180px]">
                <div>
                  {step.status === "success" ? (
                    <CheckCircle className="text-green-500 w-6 h-6" />
                  ) : (
                    <XCircle className="text-red-500 w-6 h-6" />
                  )}
                </div>
                <CardContent className="p-0 text-center">
                  <div className="font-semibold text-base mt-2">{step.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{step.detail}</div>
                </CardContent>
              </Card>
              {index !== processSteps.length - 1 && (
                <ArrowRight className="text-gray-400 w-5 h-5 mt-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

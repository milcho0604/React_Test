import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

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
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">지표 수집 실행 프로세스</h2>
      <div className="space-y-4">
        {processSteps.map((step, index) => (
          <Card key={index} className="flex items-start p-4 gap-4">
            <div className="mt-1">
              {step.status === "success" ? (
                <CheckCircle className="text-green-500" />
              ) : (
                <XCircle className="text-red-500" />
              )}
            </div>
            <CardContent className="p-0">
              <div className="font-semibold text-lg">{step.title}</div>
              <div className="text-sm text-gray-600">{step.detail}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

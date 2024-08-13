import React from 'react';

export default function Pricing() {
  return (
    <div className="min-h-screen dark:bg-[#0F172A] bg-[#f8fafc] text-foreground flex flex-col items-center p-6">
      <div
        className="dark:bg-[#1E293B] bg-[#ffffff] pt-16 pl-10 pb-10 pr-10 rounded-lg shadow-md w-full max-w-4xl"
        style={{
          border: '1px solid #334155',
        }}
      >
        <h2 className="text-2xl font-semibold text-[#6366F1] dark:text-[#a5b4fc]">
          API Pricing
        </h2>
        <p className="text-[#1E293B] dark:text-[#e2e8f0] mb-4">
          Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
        </p>
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1 min-w-full inline-block align-middle">
            <div className="border rounded-lg overflow-hidden dark:border-[#334155]">
              <table className="min-w-full divide-y divide-[#e2e8f0] dark:divide-[#334155]">
                <thead className="bg-[#6366F1]">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-[#f8fafc] uppercase dark:text-[#e2e8f0]"
                    >
                      API
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-[#f8fafc] uppercase dark:text-[#e2e8f0]"
                    >
                      MODEL
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-[#f8fafc] uppercase dark:text-[#e2e8f0]"
                    >
                      PRICE PER 1K TOKENS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e2e8f0] dark:divide-[#334155]">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1E293B] dark:text-neutral-200">
                      OpenAI
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1E293B] dark:text-neutral-200">
                      GPT-3.5
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1E293B] dark:text-neutral-200">
                      $0.002
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1E293B] dark:text-neutral-200">
                      OpenAI
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1E293B] dark:text-neutral-200">
                      GPT-4
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1E293B] dark:text-neutral-200">
                      $0.03
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1E293B] dark:text-neutral-200">
                      Together AI
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1E293B] dark:text-neutral-200">
                      Llama-2-70b
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1E293B] dark:text-neutral-200">
                      $0.0008
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1E293B] dark:text-neutral-200">
                      Together AI
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1E293B] dark:text-neutral-200">
                      Llama-2-13b
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1E293B] dark:text-neutral-200">
                      $0.0006
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-[#6366F1] dark:text-[#a5b4fc]">
            Token Estimation
          </h3>
          <p className="text-[#1E293B] dark:text-[#e2e8f0] mb-4">
            On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
          </p>
          <h3 className="text-xl font-semibold text-[#6366F1] dark:text-[#a5b4fc]">
            Billing
          </h3>
          <p className="text-[#1E293B] dark:text-[#e2e8f0]">
            You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}

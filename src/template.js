import { useEffect, useState } from "react";
import Handlebars from "handlebars";
import html2pdf from "html2pdf.js";
import Button from "./global/Button";

const PDFGenerator = ({ name, pdfFormat, pdfOrientation, pdfData }) => {
  const [loading, setLoading] = useState(false);
  const [pdfGenerated, setPdfGenerated] = useState(false);

  const downloadPDF = () => {
    if (loading) return;
    setPdfGenerated(true);
  };

  const templateSource = ` <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{title}}</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="html2pdf.bundle.min.js"></script>

        <style>
          th, td{
            
            padding-bottom: 16px !important
        }
        </style>
      </head>
        <body>
            <div class="card">
                <div class="card-body">
                    <div class="container">
                        <p class="flex justify-between align-baseline mb-16">
                          <span class="">
                            <img src="{{businessLogo}}" class="w-full h-10 object-contain"/>
                          </span>
                            <span class="text-4xl uppercase font-semibold">Invoice</span>
                        </p>
    
                        <div class="flex items-start justify-between mb-10">
                        <div>
                            <p class="text-sm font-bold">BILLED TO:</p>
                            <p class="text-sm">{{customerName}}</p>
                            <p class="text-sm">{{customerPhoneNumber}}</p>
                            <p class="text-sm">{{customerAddress}}</p>
                        </div>
  
                        <div class="text-right">
                            <p class="text-sm">Invoice No. {{invoiceNumber}}</p>
                            <p class="text-sm">{{invoiceDate}}</p>
                        </div>
                    </div>
    
                        <table class="table-auto w-full text-center">
                            <thead>
                                <tr class="px-3 border-black border-t-2 text-center font-semibold text-lg">
                                    <th class=" px-3 text-left w-3/6 ">Item</th>
                                    <th class="w-1/6">Quantity</th>
                                    <th class="w-1/6">Unit Price</th>
                                    <th class="w-1/6">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {{#each invoiceItems}}
                                <tr class="px-3 border-black border-t-2 text-center text-lg">
                                    <td class=" px-3 w-3/6 text-left">{{itemName}}</td>
                                    <td class="w-1/6">{{itemQuantity}}</td>
                                    <td class="w-1/6">{{itemUnitPrice}}</td>
                                    <td class="w-1/6">{{itemTotal}}</td>
                                </tr>
                                {{/each}}
                            </tbody>
    
                            <tfoot>
                                <tr class="px-4 py-2 text-lg font-semibold border-black border-t-2">
                                    <td></td>
                                    <td></td>
                                    <td class="w-3/6 p-2">Subtotal</td>
                                    <td>{{subTotal}}</td>
                                </tr>
    
                                <tr class="px-4 py-2 font-semibold text-lg">
                                    <td></td>
                                    <td></td>
                                    <td class="w-3/6">Discount ({{discountPercentage}}%)</td>
                                    <td>{{taxAmount}}</td>
                                </tr>
    
                                    <td></td>
                                    <td></td>
                                    <td class="text-xl font-semibold  border-black border-t-2">Total</td>
                                    <td class="text-xl font-semibold  border-black border-t-2">{{orderTotal}}</td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className="">
                              <p className="text-left text-lg font-semibold">
                              {{amountWords}}
                              </p>
                          </div>
                        <div style="page-break-inside: avoid;">
                            <p class="text-4xl font-medium py-6 ">Thank you!</p>
                            <div class="flex justify-between mb-2">
                                <div>
                                    <p class="text-lg font-semibold">PAYMENT INFORMATION</p>
                                    <p class="text-md">{{bankName}}</p>
                                    <p class="text-md">Account Name: {{accountName}}</p>
                                    <p class="text-md">Account Number: {{accountNumber}}</p>
                                    <p class="text-md">Pay by: {{paymentDate}}</p>
                                </div>
                                <div class=" absolute text-lg font-medium p-2 bottom-0 right-0" >
                                    <p class="text-2xl text-right font-medium py-3">{{businessName}}</p>
                                    <p class="text-md font-medium ">{{businessAddress}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </html>
    `;
  useEffect(() => {
    if (!pdfGenerated) return;

    const container = templateSource;

    const generatePDFOnClientSide = async () => {
      const pdfFileName = `${name || "Wakanda CRM Generated File"}.pdf`;
      const format = pdfFormat || "A4";
      const orientation = pdfOrientation || "portrait";
      setLoading(true);

      try {
        await html2pdf()
          .from(container)
          .set({
            margin: 10,
            filename: pdfFileName,
            html2canvas: { scale: 2 },
            jsPDF: { unit: "mm", format, orientation },
          })
          .save(pdfFileName);
        setPdfGenerated(false);
      } catch (error) {
        console.error("PDF generation error:", error);
      } finally {
        setLoading(false);
      }
    };

    generatePDFOnClientSide();
  }, [pdfGenerated]);

  return (
    <Button onClick={downloadPDF} loading={loading} fullWidth={true}>
      Download PDF
    </Button>
  );
};

export default PDFGenerator;

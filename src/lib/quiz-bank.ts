export { TOPICS_MAP } from "./quiz-types";
export type { TopicKey, McqQuestion, ShortQuestion, Question } from "./quiz-types";
import type { Question } from "./quiz-types";

const FORMAT_AUDIT_EXCLUDED_IDS = new Set<string>([]);

const RAW_QUIZ_BANK: Question[] = [

// ─── 2020 Section I ───────────────────────────────────────────────────────────

  { id: "20m1", topic: "human_resources", type: "mcq", marks: 1, src: "2020 HSC, Section I, Q1",
    stem: "Which row of the table shows benefits of both staff training and staff development?",
    stimulus: [{ type: "table", headers: ["", "Staff training", "Staff development"], rows: [["A.", "Increase staff skills", "Increased staff turnover"], ["B.", "Increase staff skills", "Retain experienced staff"], ["C.", "Decrease in workplace accidents", "Increased staff turnover"], ["D.", "Decrease in workplace redundancies", "Retain experienced staff"]] }],
    options: ["Increase staff skills / Increased staff turnover", "Increase staff skills / Retain experienced staff", "Decrease in workplace accidents / Increased staff turnover", "Decrease in workplace redundancies / Retain experienced staff"],
    answer: 1, explain: "Training can increase staff skills, while development can help retain experienced staff." },

  { id: "20m2", topic: "human_resources", type: "mcq", marks: 1, src: "2020 HSC, Section I, Q2",
    stem: "Betty believes she is eligible to ask her employer for flexible working arrangements.\n\nWhich of the following is a provision of the Fair Work Act 2009 (Cth) that gives Betty the right to make this request?",
    options: ["A modern award", "A common law contract", "An enterprise agreement", "Minimum employment standards"],
    answer: 3, explain: "The National Employment Standards include the right for eligible employees to request flexible working arrangements." },

  { id: "20m3", topic: "human_resources", type: "mcq", marks: 1, src: "2020 HSC, Section I, Q3",
    stem: "A firm has been hiring its own staff but due to growth no longer has time to satisfactorily manage this process.\n\nWhat could the firm's human resource manager use to resolve this issue?",
    options: ["Acquisition", "Outsourcing", "Recruitment", "Selection"],
    answer: 1, explain: "The firm can outsource the hiring process to an external specialist." },

  { id: "20m4", topic: "marketing", type: "mcq", marks: 1, src: "2020 HSC, Section I, Q4",
    stem: "Australian businesses are required by law to offer a refund if the product or service",
    options: ["does not match the description.", "is no longer required by the customer.", "is damaged by the customer after purchase.", "is available at a competitor's business for a cheaper price."],
    answer: 0, explain: "Consumer law requires remedies when a product or service does not match its description." },

  { id: "20m5", topic: "marketing", type: "mcq", marks: 1, src: "2020 HSC, Section I, Q5",
    stem: "A business collects its own primary data through market research prior to developing a new product.\n\nWhich of the following could this business have used to provide primary data?",
    options: ["Customer survey", "Published journal", "Australian Bureau of Statistics catalogue", "Australian Bureau of Statistics census data"],
    answer: 0, explain: "A customer survey gathers new data directly from respondents, making it primary data." },

  { id: "20m6", topic: "operations", type: "mcq", marks: 1, src: "2020 HSC, Section I, Q6",
    stem: "The main advantage of economies of scale is that a business can achieve",
    options: ["economic objectives.", "industry benchmarks.", "lower per unit input costs.", "simplified supply chain management."],
    answer: 2, explain: "Economies of scale lower average input cost per unit as output increases." },

  { id: "20m7", topic: "operations", type: "mcq", marks: 1, src: "2020 HSC, Section I, Q7",
    stem: "What is the most likely reason for an Australian clothing business choosing to manufacture locally?",
    options: ["To achieve cost leadership", "To maintain quality control", "To focus on other key business functions", "To take advantage of lower overseas wages"],
    answer: 1, explain: "Local manufacturing can give a business closer control over quality." },

  { id: "20m8", topic: "marketing", type: "mcq", marks: 1, src: "2020 HSC, Section I, Q8",
    stem: "Two boxes of oats are shown.\n\nWhich strategy is being used by Product B that is not being used by Product A?",
    stimulus: [{ type: "table", headers: ["Product A", "Product B"], rows: [["Fruit Oats\n\n300 g", "Miller's Farm\nFruit Oats\n\n300 g"]] }],
    options: ["Branding", "Labelling", "Packaging", "Trademarking"],
    answer: 0, explain: "Product B uses the brand name Miller's Farm, while Product A only gives the product description." },

  { id: "20m9", topic: "human_resources", type: "mcq", marks: 1, src: "2020 HSC, Section I, Q9",
    stem: "At which stage of the economic cycle is it most likely for a business to begin to reduce staff working hours?",
    options: ["Boom", "Downswing", "Recession", "Upswing"],
    answer: 1, explain: "Businesses often begin reducing staff hours during a downswing as demand starts to fall." },

  { id: "20m10", topic: "marketing", type: "mcq", marks: 1, src: "2020 HSC, Section I, Q10",
    stem: "A company has reduced the price of their current razor as a new model will be released soon.\n\nWhich stage of the product life cycle for the current razor is indicated by this decision?",
    options: ["Introduction", "Growth", "Maturity", "Decline"],
    answer: 3, explain: "Reducing the price before a replacement model is released indicates the current model is in decline." },

  { id: "20m11", topic: "operations", type: "mcq", marks: 1, src: "2020 HSC, Section I, Q11",
    stem: "A manager is concerned about ongoing theft and the cost of storing raw materials.\n\nWhich inventory management strategy would best address the manager's concerns?",
    options: ["Just-in-time", "Warehousing", "Last-in-first-out", "First-in-first-out"],
    answer: 0, explain: "Just-in-time reduces inventory held on site, lowering storage costs and exposure to theft." },

  { id: "20m12", topic: "human_resources", type: "mcq", marks: 1, src: "2020 HSC, Section I, Q12",
    stem: "A NSW employer develops a return to work plan in consultation with an insurer and an injured employee.\n\nWhich legislation requires the employer to undertake this action?",
    options: ["Fair Work Act 2009 (Cth)", "Workers Compensation Act 1987 (NSW)", "Work Health and Safety Act 2011 (NSW)", "Australian Human Rights Commission Act 1986 (Cth)"],
    answer: 1, explain: "Return to work planning after workplace injury is governed by NSW workers compensation legislation." },

  { id: "20m13", topic: "operations", type: "mcq", marks: 1, src: "2020 HSC, Section I, Q13",
    stem: "In order to achieve best practice, a mobile phone company examines global trends in phone technology before designing and producing their phones.\n\nWhat operations strategy is this business using?",
    options: ["Standardisation", "Global sourcing", "Scanning and learning", "Inventory management"],
    answer: 2, explain: "Examining global trends to improve practice is scanning and learning." },

  { id: "20m14", topic: "finance", type: "mcq", marks: 1, src: "2020 HSC, Section I, Q14",
    stem: "A hairdresser includes proceeds of the sale of salon equipment in the business's income statement.\n\nWhich limitation of financial reporting is evident?",
    options: ["Timing issues", "Valuing assets", "Normalised earnings", "Capitalising expenses"],
    answer: 2, explain: "Including a one-off asset sale in income can distort normalised earnings." },

  { id: "20m15", topic: "operations", type: "mcq", marks: 1, src: "2020 HSC, Section I, Q15",
    stem: "A sandwich shop bakes a variety of breads throughout the day. Customers select their choice of bread and filling(s) and sandwiches are then made to order.\n\nWhich pair of performance objectives would have influenced the development of this approach?",
    options: ["Cost and efficiency", "Efficiency and quality", "Cost and customisation", "Quality and customisation"],
    answer: 3, explain: "Fresh bread and made-to-order sandwiches emphasise quality and customisation." },

  { id: "20m16", topic: "marketing", type: "mcq", marks: 1, src: "2020 HSC, Section I, Q16",
    stem: "A bathroom products business cannot sustain the production of their current range. A consultant has advised the business to reduce the product range.\n\nThe actual and planned results for the entire year are shown.\n\nBy comparing actual and planned results, which product should be deleted?",
    stimulus: [{ type: "table", headers: ["Bathroom product", "Actual results Jan - Jun (units)", "Planned results Jan - Jun (units)", "Actual results Jul - Dec (units)", "Planned results Jul - Dec (units)"], rows: [["Coconut Handwash", "7 500", "7 500", "10 000", "9 000"], ["Lavender Bodywash", "8 000", "8 500", "8 500", "9 500"], ["Blueberry Handcream", "7 000", "6 000", "7 500", "8 000"], ["Peppermint Bath Salts", "8 000", "7 000", "8 500", "10 000"]] }],
    options: ["Coconut Handwash", "Lavender Bodywash", "Blueberry Handcream", "Peppermint Bath Salts"],
    answer: 1, explain: "Lavender Bodywash is below planned results in both periods, so it is the weakest candidate for deletion." },

  { id: "20m17", topic: "finance", type: "mcq", marks: 1, src: "2020 HSC, Section I, Q17",
    stem: "Use the following information to answer Questions 17 and 18.\n\nA business provided the following financial information.\n\nWhich of the following shows the gross profit and the net profit ratio for this business in 2020?",
    stimulus: [{ type: "table", headers: ["", "2019 ($)", "2020 ($)"], rows: [["Sales", "250 000", "275 000"], ["Cost of goods sold", "145 000", "145 000"], ["Gross profit", "?", "?"], ["Expenses", "35 000", "35 000"], ["Net profit", "?", "?"]] }],
    options: ["$105 000 / 28.0%", "$105 000 / 42.0%", "$130 000 / 34.5%", "$130 000 / 47.0%"],
    answer: 2, explain: "In 2020, gross profit is $275 000 - $145 000 = $130 000; net profit is $95 000; net profit ratio is $95 000 ÷ $275 000 = 34.5%." },

  { id: "20m18", topic: "finance", type: "mcq", marks: 1, src: "2020 HSC, Section I, Q18",
    stem: "Use the following information to answer Questions 17 and 18.\n\nA business provided the following financial information.\n\nWhich of the following describes the change in both the gross profit ratio and expense ratio from 2019 to 2020?",
    stimulus: [{ type: "table", headers: ["", "2019 ($)", "2020 ($)"], rows: [["Sales", "250 000", "275 000"], ["Cost of goods sold", "145 000", "145 000"], ["Gross profit", "?", "?"], ["Expenses", "35 000", "35 000"], ["Net profit", "?", "?"]] }],
    options: ["Improved / Improved", "Improved / Worsened", "Worsened / Improved", "Worsened / Worsened"],
    answer: 0, explain: "Gross profit ratio increased from 42% to 47.3%, while the expense ratio decreased from 14% to 12.7%, so both improved." },

  { id: "20m19", topic: "finance", type: "mcq", marks: 1, src: "2020 HSC, Section I, Q19",
    stem: "Use the following information to answer Questions 19 and 20.\n\nThe liquidity position of this business in 2020 indicates that it is",
    stimulus: [
      { type: "heading", text: "Extract from balance sheet for a business as at June 2020" },
      { type: "table", headers: ["", "($)"], rows: [["Current assets", "1700"], ["Non-current assets", "8650"], ["Current liabilities", "1100"], ["Non-current liabilities", "6500"]] },
      { type: "heading", text: "Additional information" },
      { type: "list", items: ["Financial data 2019", "Debt to equity ratio = 2 : 1 or 200%", "Current ratio = 1.25 : 1 or 125%", "Industry averages for 2019-2020", "Debt to equity ratio (total liabilities ÷ total equity) = 1 : 1 or 100%", "Current ratio (current assets ÷ current liabilities) = 2 : 1 or 200%"] },
    ],
    options: ["better than the industry average and has improved since 2019.", "better than the industry average and has worsened since 2019.", "worse than the industry average and has improved since 2019.", "worse than the industry average and has worsened since 2019."],
    answer: 2, explain: "The 2020 current ratio is 1700 ÷ 1100 = 1.55:1, better than 2019 but worse than the industry average of 2:1." },

  { id: "20m20", topic: "finance", type: "mcq", marks: 1, src: "2020 HSC, Section I, Q20",
    stem: "Use the following information to answer Questions 19 and 20.\n\nThe gearing for this business in 2020 indicates that it is",
    stimulus: [
      { type: "heading", text: "Extract from balance sheet for a business as at June 2020" },
      { type: "table", headers: ["", "($)"], rows: [["Current assets", "1700"], ["Non-current assets", "8650"], ["Current liabilities", "1100"], ["Non-current liabilities", "6500"]] },
      { type: "heading", text: "Additional information" },
      { type: "list", items: ["Financial data 2019", "Debt to equity ratio = 2 : 1 or 200%", "Current ratio = 1.25 : 1 or 125%", "Industry averages for 2019-2020", "Debt to equity ratio (total liabilities ÷ total equity) = 1 : 1 or 100%", "Current ratio (current assets ÷ current liabilities) = 2 : 1 or 200%"] },
    ],
    options: ["better than the industry average and has improved since 2019.", "better than the industry average and has worsened since 2019.", "worse than the industry average and has improved since 2019.", "worse than the industry average and has worsened since 2019."],
    answer: 3, explain: "Total liabilities are $7600 and equity is $2750, so 2020 gearing is about 276%, worse than both 2019 and the industry average." },

// ─── 2020 Section II ──────────────────────────────────────────────────────────

  { id: "20s21a", topic: "human_resources", type: "short", marks: 2, src: "2020 HSC, Section II, Q21(a)",
    stem: "Outline the role of ONE external stakeholder who represents the interests of employees in workplace disputes.",
    criteria: ["Sketches in general terms the role of ONE stakeholder who represents the interests of employees in workplace disputes", "Provides some relevant information about ONE stakeholder who represents the interests of employees"],
    criteriaBands: [
      { marks: "2", criteria: ["Sketches in general terms the role of ONE stakeholder who represents the interests of employees in workplace disputes"] },
      { marks: "1", criteria: ["Provides some relevant information about ONE stakeholder who represents the interests of employees"] },
    ],
    sample: "In a workplace dispute, employee interests are represented by trade unions. Trade unions operate for the benefit of their members and one of the services which they provide is to bargain on behalf of members in negotiations with employers." },

  { id: "20s21b", topic: "human_resources", type: "short", marks: 4, src: "2020 HSC, Section II, Q21(b)",
    stem: "Distinguish between voluntary and involuntary separation.",
    criteria: ["Demonstrates a clear understanding of the difference between voluntary and involuntary separation", "Demonstrates an understanding of the difference between voluntary and involuntary separation", "Demonstrates some understanding of a difference between voluntary and involuntary separation", "OR", "Sketches in general terms voluntary and involuntary separation", "Provides some relevant information about voluntary or involuntary separation"],
    criteriaBands: [
      { marks: "4", criteria: ["Demonstrates a clear understanding of the difference between voluntary and involuntary separation"] },
      { marks: "3", criteria: ["Demonstrates an understanding of the difference between voluntary and involuntary separation"] },
      { marks: "2", criteria: ["Demonstrates some understanding of a difference between voluntary and involuntary separation", "OR", "Sketches in general terms voluntary and involuntary separation"] },
      { marks: "1", criteria: ["Provides some relevant information about voluntary or involuntary separation"] },
    ],
    sample: "Voluntary separation is when an employee has chosen to leave their employment of their own accord. This could be in the form of a resignation, retirement or relocation. Involuntary separation occurs when an employee is forced to leave their place of employment because they may have breached their employment conditions, finished their contract or been made redundant." },

  { id: "20s21c", topic: "human_resources", type: "short", marks: 4, src: "2020 HSC, Section II, Q21(c)",
    stem: "Explain how technological influences and globalisation can lead to a company reducing staff numbers. Support your answer with relevant examples.",
    criteria: ["Provides why AND/OR how technological influences and globalisation can lead to a company reducing staff numbers with reference to relevant examples", "Provides characteristics and features of how technological influences and globalisation can lead to a company reducing staff numbers with reference to a relevant example", "Sketches in general terms how technological influences AND/OR globalisation can lead to a company reducing staff numbers with reference to an example", "Sketches in general terms how technological influences AND/OR globalisation can lead to a company reducing staff numbers"],
    criteriaBands: [
      { marks: "4", criteria: ["Provides why AND/OR how technological influences and globalisation can lead to a company reducing staff numbers with reference to relevant examples"] },
      { marks: "3", criteria: ["Provides characteristics and features of how technological influences and globalisation can lead to a company reducing staff numbers with reference to a relevant example"] },
      { marks: "2", criteria: ["Sketches in general terms how technological influences AND/OR globalisation can lead to a company reducing staff numbers with reference to an example"] },
      { marks: "1", criteria: ["Sketches in general terms how technological influences AND/OR globalisation can lead to a company reducing staff numbers"] },
    ],
    sample: "Changes in technology can influence a business's ability to create and sell its product/service. A change in technology usually allows for an increase in speed and production which generally means a reduction in time spent making the product eg Samsung uses CAD and robotics to manufacture their products which has caused their assembly based labour force to be retrenched. Globalisation, which involves increased economic integration, can also increase production and create cost saving measures. Globalisation allows businesses to benefit from lower production and labour costs found overseas which may lead to the outsourcing of jobs overseas. For example, Bonds moved their manufacturing operations offshore to take advantage of cheaper labour costs leading to Australian staff retrenchment." },

  { id: "20s22a", topic: "marketing", type: "short", marks: 3, src: "2020 HSC, Section II, Q22(a)",
    stem: "A popular Australian guitar manufacturer is about to enter the US market using a standardised marketing strategy.\n\nClarify the purpose of a SWOT analysis for this business.",
    criteria: ["Clearly determines the purpose of a SWOT analysis for this business", "Names elements of a SWOT analysis and refers to its purpose for this business", "Names elements of a SWOT analysis"],
    criteriaBands: [
      { marks: "3", criteria: ["Clearly determines the purpose of a SWOT analysis for this business"] },
      { marks: "2", criteria: ["Names elements of a SWOT analysis and refers to its purpose for this business"] },
      { marks: "1", criteria: ["Names elements of a SWOT analysis"] },
    ],
    sample: "The purpose of the SWOT analysis for this business is to enable them to understand the current position of the business by identifying internal strengths and weaknesses. Additionally, it provides this business with information on potential opportunities and threats when entering the US market.\n\nAs part of the situational analysis, the SWOT informs the rest of the marketing process as marketing objectives and strategies can only be determined upon completion of the SWOT." },

  { id: "20s22b", topic: "marketing", type: "short", marks: 3, src: "2020 HSC, Section II, Q22(b)",
    stem: "A popular Australian guitar manufacturer is about to enter the US market using a standardised marketing strategy.\n\nRecommend a pricing method this business could adopt for the US market.",
    criteria: ["Clearly provides reasons for adopting a particular pricing method", "Provides characteristics and features of a pricing method or pricing strategy", "Names a pricing method or pricing strategy"],
    criteriaBands: [
      { marks: "3", criteria: ["Clearly provides reasons for adopting a particular pricing method"] },
      { marks: "2", criteria: ["Provides characteristics and features of a pricing method or pricing strategy"] },
      { marks: "1", criteria: ["Names a pricing method or pricing strategy"] },
    ],
    sample: "Competition based pricing could be an effective pricing method for this business in the US market. This pricing method covers materials and operations costs and is comparable with the competitor's price based on the following pricing options:\n• Below that of competitors to undercut the competition to establish themselves in the market.\n• Equal to competitor's price which saves money on researching how much consumers would pay for guitars.\n• Above that of competitors to create a perception of superiority." },

  { id: "20s22c", topic: "marketing", type: "short", marks: 4, src: "2020 HSC, Section II, Q22(c)",
    stem: "A popular Australian guitar manufacturer is about to enter the US market using a standardised marketing strategy.\n\nJustify this business's decision to adopt a standardised marketing strategy.",
    criteria: ["Provides a clear and supported argument for the use of a standardised marketing strategy by this business", "Provides an argument for the use of a standardised marketing strategy this business", "Sketches in general terms a standardised marketing strategy", "Makes a relevant statement about a standardised marketing strategy"],
    criteriaBands: [
      { marks: "4", criteria: ["Provides a clear and supported argument for the use of a standardised marketing strategy by this business"] },
      { marks: "3", criteria: ["Provides an argument for the use of a standardised marketing strategy this business"] },
      { marks: "2", criteria: ["Sketches in general terms a standardised marketing strategy"] },
      { marks: "1", criteria: ["Makes a relevant statement about a standardised marketing strategy"] },
    ],
    sample: "Using a standardised marketing strategy this business can increase its success when entering the global market. It can achieve economies of scale which achieve lower per unit input costs. This strategy paired with standardised marketing can save the business money when taking spare parts, repairs and after-sales service into account. Customers also benefit from this strategy as they can expect consistency throughout the world and product features remain the same regardless of where the product is purchased. Finally, the business will achieve cost savings as the one marketing approach will be adopted worldwide and does not need to be customised for the needs of individual markets." },

  { id: "20s23a", topic: "operations", type: "short", marks: 4, src: "2020 HSC, Section II, Q23(a)",
    stem: "Use the information provided to answer parts (a) and (b).\n\nA denim jeans clothing store is concerned about declining sales. They have identified that the lower sales are a result of:\n• outdated store presentation\n• increased foreign competition\n• a reluctance to adopt modern in-store payment methods.\n\nHow could the strategic role of operations management assist this business?",
    criteria: ["Provides detailed ways in which the strategic role of operations management could assist this business", "Provides ways in which the strategic role of operations management could assist this business", "Provides characteristics and features of operations management that could assist this business", "Sketches in general terms an aspect of operations management"],
    criteriaBands: [
      { marks: "4", criteria: ["Provides detailed ways in which the strategic role of operations management could assist this business"] },
      { marks: "3", criteria: ["Provides ways in which the strategic role of operations management could assist this business"] },
      { marks: "2", criteria: ["Provides characteristics and features of operations management that could assist this business"] },
      { marks: "1", criteria: ["Sketches in general terms an aspect of operations management"] },
    ],
    sample: "The strategic role of operations management ensures the operations function effectively contributes to the achievement of goals and the strategic direction of the business. The business could examine goods/service differentiation as currently the business' product range is limited to denim products. They could differentiate their products and add non-denim items and clothing accessories. This would potentially increase the customer base, attracting customers who are interested in non-denim items which may increase sales and profits." },

  { id: "20s23b", topic: "operations", type: "short", marks: 6, src: "2020 HSC, Section II, Q23(b)",
    stem: "Use the information provided to answer parts (a) and (b).\n\nA denim jeans clothing store is concerned about declining sales. They have identified that the lower sales are a result of:\n• outdated store presentation\n• increased foreign competition\n• a reluctance to adopt modern in-store payment methods.\n\nAnalyse operations strategies that could be used to address TWO operations influences affecting this business.",
    criteria: ["Draws out and relates the implications of using operations strategies to address TWO operations influences affecting the business", "Provides implications of operations strategies that could be used to address TWO operations influences affecting the business", "Provides characteristics and features of operations strategies which could be used by this business to address TWO operations influences affecting the business", "Sketches in general terms operations strategies in general terms with limited link to operations influences", "Sketches in general terms a strategy or an operations influence in general terms", "Provides some relevant information"],
    criteriaBands: [
      { marks: "6", criteria: ["Draws out and relates the implications of using operations strategies to address TWO operations influences affecting the business"] },
      { marks: "5", criteria: ["Provides implications of operations strategies that could be used to address TWO operations influences affecting the business"] },
      { marks: "4", criteria: ["Provides characteristics and features of operations strategies which could be used by this business to address TWO operations influences affecting the business"] },
      { marks: "3", criteria: ["Sketches in general terms operations strategies in general terms with limited link to operations influences"] },
      { marks: "2", criteria: ["Sketches in general terms a strategy or an operations influence in general terms"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "The business should address the influence of technology. To manage this influence, the store could adopt more leading-edge payment methods such as smartphones and smart watches or established technologies such as EFTPOS. By purchasing this new equipment, customers might be more inclined to shop at the business which may increase sales and enhance speed of service.\n\nTo address the influence of cost-based competition, which has resulted in declining sales, the business could utilise the strategies of supply chain management, global sourcing or the performance objective of cost. By improving logistics in the supply chain and focusing on cost as a performance objective the business could improve efficiency and better compete with foreign businesses. Moreover, global sourcing typically enables lower input costs as the business takes advantage of low cost clothing producers." },

  { id: "20s24a", topic: "finance", type: "short", marks: 1, src: "2020 HSC, Section II, Q24(a)",
    stem: "Financial Information for robotics company\n\nCalculate the accounts receivable turnover ratio (sales ÷ accounts receivable) for this business.",
    stimulus: [{ type: "table", headers: ["", "($)"], rows: [["Sales", "225 000"], ["Cost of goods sold", "105 000"], ["Selling expenses", "8 500"], ["Administration expenses", "6 000"], ["Financial expenses", "4 000"], ["Accounts receivable", "30 000"], ["Robotics company credit policy", "30 days"], ["Industry expense ratio", "10%"]] }],
    criteria: ["Correctly calculates the accounts receivable turnover ratio for this business"],
    criteriaBands: [{ marks: "1", criteria: ["Correctly calculates the accounts receivable turnover ratio for this business"] }],
    sample: "(Sales ÷ accounts receivable) = 225 000 ÷ 30 000 = 7.5 (times per year)\n\nOR\n\n365 ÷ 7.5 = 49 (days)" },

  { id: "20s24b", topic: "finance", type: "short", marks: 2, src: "2020 HSC, Section II, Q24(b)",
    stem: "Financial Information for robotics company\n\nInterpret this business's expense ratio (total expenses ÷ sales).",
    stimulus: [{ type: "table", headers: ["", "($)"], rows: [["Sales", "225 000"], ["Cost of goods sold", "105 000"], ["Selling expenses", "8 500"], ["Administration expenses", "6 000"], ["Financial expenses", "4 000"], ["Accounts receivable", "30 000"], ["Robotics company credit policy", "30 days"], ["Industry expense ratio", "10%"]] }],
    criteria: ["Correctly calculates and interprets the expense ratio for this business", "Correctly calculates the expense ratio for this business or correctly interprets the expense ratio"],
    criteriaBands: [
      { marks: "2", criteria: ["Correctly calculates and interprets the expense ratio for this business"] },
      { marks: "1", criteria: ["Correctly calculates the expense ratio for this business or correctly interprets the expense ratio"] },
    ],
    sample: "(Total expenses ÷ sales) = 18 500 ÷ 225 000 = 8.2%\n\nFor every $1 the business makes in sales the business is spending 8 cents on expenses.\n\nThe ratio compares total expenses with total sales and indicates that for every $1 of sales, 8.2% (or 8.2 cents) is absorbed by expenses. This business is below the industry standard of 10%." },

  { id: "20s24c", topic: "finance", type: "short", marks: 3, src: "2020 HSC, Section II, Q24(c)",
    stem: "Financial Information for robotics company\n\nRecommend ONE financial strategy this business could implement to improve efficiency in the collection of accounts receivable.",
    stimulus: [{ type: "table", headers: ["", "($)"], rows: [["Sales", "225 000"], ["Cost of goods sold", "105 000"], ["Selling expenses", "8 500"], ["Administration expenses", "6 000"], ["Financial expenses", "4 000"], ["Accounts receivable", "30 000"], ["Robotics company credit policy", "30 days"], ["Industry expense ratio", "10%"]] }],
    criteria: ["Provides reasons in favour of ONE financial strategy this business could implement to improve efficiency in the collection of accounts receivable", "Sketches in general terms ONE financial strategy this business could implement to improve efficiency in the collection of accounts receivable", "Names ONE financial strategy this business could implement to improve efficiency in the collection of accounts receivable"],
    criteriaBands: [
      { marks: "3", criteria: ["Provides reasons in favour of ONE financial strategy this business could implement to improve efficiency in the collection of accounts receivable"] },
      { marks: "2", criteria: ["Sketches in general terms ONE financial strategy this business could implement to improve efficiency in the collection of accounts receivable"] },
      { marks: "1", criteria: ["Names ONE financial strategy this business could implement to improve efficiency in the collection of accounts receivable"] },
    ],
    sample: "Discounts for early payments. This is where the business provides a discount to customers if they pay early to encourage faster debt collection. This could be in line with penalties for late payments to encourage this efficiency." },

  { id: "20s24d", topic: "finance", type: "short", marks: 4, src: "2020 HSC, Section II, Q24(d)",
    stem: "Financial Information for robotics company\n\nExplain TWO ways in which comparative ratio analysis can be used by this business to assess its financial position.",
    stimulus: [{ type: "table", headers: ["", "($)"], rows: [["Sales", "225 000"], ["Cost of goods sold", "105 000"], ["Selling expenses", "8 500"], ["Administration expenses", "6 000"], ["Financial expenses", "4 000"], ["Accounts receivable", "30 000"], ["Robotics company credit policy", "30 days"], ["Industry expense ratio", "10%"]] }],
    criteria: ["Provides an explanation of how TWO ways of comparative ratio analysis can be used to assess the financial position of the business", "Sketches in general terms how TWO ways of comparative ratio analysis can be used to assess the financial position of the business", "Sketches in general terms how comparative ratio analysis can be used to assess the financial position of the business", "Sketches comparative ratio analysis in general terms"],
    criteriaBands: [
      { marks: "4", criteria: ["Provides an explanation of how TWO ways of comparative ratio analysis can be used to assess the financial position of the business"] },
      { marks: "3", criteria: ["Sketches in general terms how TWO ways of comparative ratio analysis can be used to assess the financial position of the business"] },
      { marks: "2", criteria: ["Sketches in general terms how comparative ratio analysis can be used to assess the financial position of the business"] },
      { marks: "1", criteria: ["Sketches comparative ratio analysis in general terms"] },
    ],
    sample: "First method is over different time periods. This business could be comparing financial data within different years or financial periods to analyse liquidity, gearing, profitability and efficiency and to understand how these have changed and put strategies in place to address any issues.\n\nThe second way is against similar businesses. This business could see the financial position of the competition to understand if their expenses are too high compared to competitors. If this is the case, then the business could change their supplier to a cheaper one. Also, if the competitor has consistently made sales, even during slow periods, the business can analyse this to understand what they are doing wrong and hence make adjustments." },

// ─── 2020 Section III/IV ──────────────────────────────────────────────────────

  { id: "20e25", topic: "marketing", topics: ["marketing", "operations"], type: "extended", marks: 20, src: "2020 HSC, Section III, Q25",
    stem: "To address these concerns, you have been hired as a consultant by Icecreams R Us to write a report to their directors. In your report:\n\n• describe TWO physical distribution issues that the business needs to consider in the delivery of their product\n• justify ONE promotional strategy the business could use\n• recommend possible changes the business could make to their operations processes to address the volume and quality concerns of Eucafuels Ltd.",
    stimulus: [
      { type: "paragraph", text: "Icecreams R Us exclusively delivers ice-cream to homes in Newcastle. To increase market share, they are negotiating with a major service station chain, Eucafuels Ltd, to sell their brand of ice-cream throughout NSW." },
      { type: "paragraph", text: "Before they agree to sell the ice-cream, Eucafuels Ltd have a number of concerns over the ability of Icecreams R Us to:" },
      { type: "list", items: ["deliver ice-cream to their outlets in NSW in a timely manner", "create an awareness that the ice-cream will be sold at Eucafuels Ltd outlets", "produce an increased volume of ice-cream while maintaining a quality product."] },
    ],
    criteria: ["Provides detailed characteristics and features of TWO physical distribution issues which the business could use to deliver the product", "Clearly provides an argument for ONE promotional strategy the business could use", "Provides detailed reasons in favour of possible changes the business could make to their operations processes to address the volume and quality concerns of Eucafuels", "Makes effective use of the information provided, demonstrating extensive knowledge and understanding relevant to the question", "Presents a sustained, logical and cohesive business report integrating relevant business terminology and concepts", "Provides characteristics and features of TWO physical distribution issues which the business could use to deliver the product", "Provides an argument for ONE promotional strategy the business could use", "Provides reasons in favour of possible change(s) the business could make to their operations processes to address the volume and quality concerns of Eucafuels", "Makes some use of the information provided, demonstrating some knowledge and understanding relevant to the question", "Presents a logical and cohesive business report integrating relevant business terminology and concepts", "Sketches in general terms TWO physical distribution issues which the business could use to deliver the product OR provides characteristics and features of ONE physical distribution issue which the business could use to deliver the product", "Provides characteristics and features of ONE promotional strategy which the business could use", "Provides characteristics and features of operations processes to address volume and/or quality concerns", "Includes features of a business report and uses some business terminology and concepts", "Identifies a physical distribution issue", "Sketches in general terms ONE promotional strategy", "Sketches in general terms operations processes", "May include some features of a business report and uses some basic business terminology", "Refers to operations and/or marketing", "Uses basic business terminology"],
    criteriaBands: [
      { marks: "17–20", criteria: ["Provides detailed characteristics and features of TWO physical distribution issues which the business could use to deliver the product", "Clearly provides an argument for ONE promotional strategy the business could use", "Provides detailed reasons in favour of possible changes the business could make to their operations processes to address the volume and quality concerns of Eucafuels", "Makes effective use of the information provided, demonstrating extensive knowledge and understanding relevant to the question", "Presents a sustained, logical and cohesive business report integrating relevant business terminology and concepts"] },
      { marks: "13–16", criteria: ["Provides characteristics and features of TWO physical distribution issues which the business could use to deliver the product", "Provides an argument for ONE promotional strategy the business could use", "Provides reasons in favour of possible change(s) the business could make to their operations processes to address the volume and quality concerns of Eucafuels", "Makes some use of the information provided, demonstrating some knowledge and understanding relevant to the question", "Presents a logical and cohesive business report integrating relevant business terminology and concepts"] },
      { marks: "9–12", criteria: ["Sketches in general terms TWO physical distribution issues which the business could use to deliver the product OR provides characteristics and features of ONE physical distribution issue which the business could use to deliver the product", "Provides characteristics and features of ONE promotional strategy which the business could use", "Provides characteristics and features of operations processes to address volume and/or quality concerns", "Includes features of a business report and uses some business terminology and concepts"] },
      { marks: "5–8", criteria: ["Identifies a physical distribution issue", "Sketches in general terms ONE promotional strategy", "Sketches in general terms operations processes", "May include some features of a business report and uses some basic business terminology"] },
      { marks: "1–4", criteria: ["Refers to operations and/or marketing", "Uses basic business terminology"] },
    ],
    sample: "",
    sampleBlocks: [
      { type: "heading", text: "Answers could include:" },
      { type: "heading", text: "Marketing" },
      { type: "list", items: ["Place/distribution", "Physical distribution issues - transport, warehousing, inventory", "Promotion", "Elements of the promotion mix - advertising, personal selling and relationship marketing, sales promotions, publicity and public relations", "The communication process - opinion leaders, word of mouth"] },
      { type: "heading", text: "Operations" },
      { type: "list", items: ["Transformation processes", "The influence of volume, variety, variation in demand and visibility (customer contact)", "Sequencing and scheduling Gantt charts, critical path analysis", "Technology, task design and process layout", "Monitoring, control and improvement", "Operations strategies."] },
    ] },

  { id: "20e26", topic: "finance", type: "extended", marks: 20, src: "2020 HSC, Section IV, Q26",
    stem: "Evaluate the effectiveness of financial management strategies used to achieve profit and growth objectives.",
    criteria: ["Makes a judgement about the financial management strategies used to achieve profit and growth objectives", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts", "Clearly explains the relationship between financial management strategies and profit and growth objectives", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts", "Identifies the relationship between financial management strategies AND profit and/or growth objectives", "Makes reference to case study/studies and/or contemporary business issues", "Communicates using relevant business terminology and concepts", "Sketches in general terms financial management strategies and/or profit and growth objectives", "May make reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and concepts", "Makes limited reference to financial management", "May identify case study/studies", "Uses basic business terminology"],
    criteriaBands: [
      { marks: "17–20", criteria: ["Makes a judgement about the financial management strategies used to achieve profit and growth objectives", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts"] },
      { marks: "13–16", criteria: ["Clearly explains the relationship between financial management strategies and profit and growth objectives", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts"] },
      { marks: "9–12", criteria: ["Identifies the relationship between financial management strategies AND profit and/or growth objectives", "Makes reference to case study/studies and/or contemporary business issues", "Communicates using relevant business terminology and concepts"] },
      { marks: "5–8", criteria: ["Sketches in general terms financial management strategies and/or profit and growth objectives", "May make reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and concepts"] },
      { marks: "1–4", criteria: ["Makes limited reference to financial management", "May identify case study/studies", "Uses basic business terminology"] },
    ],
    sample: "",
    sampleBlocks: [
      { type: "heading", text: "Answers could include:" },
      { type: "heading", text: "Role of financial management" },
      { type: "list", items: ["Objectives of financial management - profitability, growth, efficiency, liquidity, solvency", "Short term and long term"] },
      { type: "heading", text: "Financial management strategies" },
      { type: "list", items: ["Cash-flow management - cash-flow statements, distribution of payments, discounts for early payment, factoring", "Working capital management - control of current assets - cash, receivables, inventories; control of current liabilities - payables, loans, overdrafts; strategies - leasing, sale and lease back", "Profitability management - cost controls - fixed and variable, cost centres, expense minimisation; revenue controls - marketing objectives", "Global financial management - exchange rates, interest rates, methods of international payment - payment in advance, letter of credit, clean payment, bill of exchange, hedging, derivatives."] },
    ] },

  { id: "20e27", topic: "human_resources", type: "extended", marks: 20, src: "2020 HSC, Section IV, Q27",
    stem: "Evaluate human resource strategies used to achieve THREE indicators of effective human resource management.",
    criteria: ["Makes a judgement about the human resource strategies used to achieve three indicators of effective human resource management", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts", "Makes evident the relationship between human resource strategies and three indicators of effective human resource management", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts", "Provides characteristics and features of human resource strategies and three indicators of effective human resource management", "Makes reference to case study/studies and/or contemporary business issues", "Communicates using relevant business terminology and concepts", "Sketches in general terms human resource strategies and/or effective human resource management", "May make reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and concepts", "Makes limited reference to human resource strategies and/or effective human resource management", "May identify case study/studies", "Uses basic business terminology"],
    criteriaBands: [
      { marks: "17–20", criteria: ["Makes a judgement about the human resource strategies used to achieve three indicators of effective human resource management", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts"] },
      { marks: "13–16", criteria: ["Makes evident the relationship between human resource strategies and three indicators of effective human resource management", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts"] },
      { marks: "9–12", criteria: ["Provides characteristics and features of human resource strategies and three indicators of effective human resource management", "Makes reference to case study/studies and/or contemporary business issues", "Communicates using relevant business terminology and concepts"] },
      { marks: "5–8", criteria: ["Sketches in general terms human resource strategies and/or effective human resource management", "May make reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and concepts"] },
      { marks: "1–4", criteria: ["Makes limited reference to human resource strategies and/or effective human resource management", "May identify case study/studies", "Uses basic business terminology"] },
    ],
    sample: "",
    sampleBlocks: [
      { type: "heading", text: "Answers could include:" },
      { type: "heading", text: "Strategies in human resource management" },
      { type: "list", items: ["Leadership style", "Job design - general or specific tasks", "Recruitment - internal or external, general or specific skills", "Training and development - current or future skills", "Performance management - developmental or administrative", "Rewards - monetary and non-monetary, individual or group, performance pay", "Global - costs, skills, supply", "Workplace disputes - resolution - negotiation, mediation, grievance procedures, involvement of courts and tribunals"] },
      { type: "heading", text: "Effectiveness of human resource management" },
      { type: "list", items: ["Indicators", "Corporate culture", "Benchmarking key variables", "Changes in staff turnover", "Absenteeism", "Accidents", "Levels of disputation", "Worker satisfaction."] },
    ] },

// ─── 2021 Section I ───────────────────────────────────────────────────────────

  { id: "21m1", topic: "finance", type: "mcq", marks: 1, src: "2021 HSC, Section I, Q1",
    stem: "The role of a cost centre within a business is to monitor and control",
    options: ["assets.", "expenses.", "liabilities.", "receipts."],
    answer: 1, explain: "A cost centre is a business unit responsible for monitoring and controlling expenses." },

  { id: "21m2", topic: "human_resources", type: "mcq", marks: 1, src: "2021 HSC, Section I, Q2",
    stem: "Which pair of business functions is conducted by human resource management?",
    options: ["Pricing and scheduling", "Scheduling and induction", "Induction and recruitment", "Recruitment and receivables"],
    answer: 2, explain: "Recruitment and induction are both human resource management functions." },

  { id: "21m3", topic: "operations", type: "mcq", marks: 1, src: "2021 HSC, Section I, Q3",
    stem: "Which row of the table shows both an advantage and a disadvantage of a business investing in leading edge technology?",
    stimulus: [{ type: "table", headers: ["", "Advantage", "Disadvantage"], rows: [["A.", "Higher quality output", "High initial investment"], ["B.", "Proven effectiveness", "Increased waste"], ["C.", "Widely accepted and used", "High initial investment"], ["D.", "Increased speed", "Increased waste"]] }],
    options: ["Higher quality output / High initial investment", "Proven effectiveness / Increased waste", "Widely accepted and used / High initial investment", "Increased speed / Increased waste"],
    answer: 0, explain: "Leading edge technology can improve quality but commonly requires high initial investment." },

  { id: "21m4", topic: "human_resources", type: "mcq", marks: 1, src: "2021 HSC, Section I, Q4",
    stem: "Which statement about common law contracts is correct?",
    options: ["Common law contracts are determined by the Fair Work Commission.", "Common law contracts are required to pass the 'better off overall test'.", "Common law contracts are negotiated by unions on behalf of employees.", "Common law contracts are between individual employees and their employer."],
    answer: 3, explain: "Common law contracts are negotiated individually between an employee and their employer." },

  { id: "21m5", topic: "marketing", type: "mcq", marks: 1, src: "2021 HSC, Section I, Q5",
    stem: "A consumer purchases expensive designer clothing as they believe they are getting higher quality and a longer lasting product.\n\nWhich factor is influencing this consumer's choice?",
    options: ["Economic", "Government", "Psychological", "Sociocultural"],
    answer: 2, explain: "The consumer's perception of quality and durability is a psychological factor influencing choice." },

  { id: "21m6", topic: "human_resources", type: "mcq", marks: 1, src: "2021 HSC, Section I, Q6",
    stem: "Which row of the table shows how a recession would affect human resource management (HRM) processes and strategies in the tourism industry?",
    stimulus: [{ type: "table", headers: ["", "Effect on HRM processes", "Effect on HRM strategies"], rows: [["A.", "Increase in separation", "Decrease in monetary rewards"], ["B.", "Increase in acquisition", "Increase in training expenditure"], ["C.", "Decrease in separation", "Decrease in monetary rewards"], ["D.", "Decrease in acquisition", "Increase in training expenditure"]] }],
    options: ["Increase in separation / Decrease in monetary rewards", "Increase in acquisition / Increase in training expenditure", "Decrease in separation / Decrease in monetary rewards", "Decrease in acquisition / Increase in training expenditure"],
    answer: 0, explain: "A recession in tourism would likely reduce demand, increasing separation and reducing monetary rewards." },

  { id: "21m7", topic: "marketing", type: "mcq", marks: 1, src: "2021 HSC, Section I, Q7",
    stem: "A manufacturer of fishing equipment sponsors an annual fishing competition. A local TV news station reports on the competition, which leads to an increase in sales for the manufacturer.\n\nWhich combination of elements of the promotion mix have benefited the manufacturer?",
    options: ["Publicity and advertising", "Advertising and sales promotion", "Relationship marketing and publicity", "Sales promotion and relationship marketing"],
    answer: 0, explain: "Sponsoring the competition is advertising, while the TV news coverage is publicity." },

  { id: "21m8", topic: "marketing", type: "mcq", marks: 1, src: "2021 HSC, Section I, Q8",
    stem: "A farmer sells vegetables to a manufacturer of tinned vegetables. The manufacturer then sells the tinned vegetables to supermarkets.\n\nWhich row of the table shows the markets targeted by the farmer and the manufacturer?",
    stimulus: [{ type: "table", headers: ["", "Market targeted by farmer", "Market targeted by manufacturer"], rows: [["A.", "Resource", "Intermediate"], ["B.", "Industrial", "Intermediate"], ["C.", "Industrial", "Consumer"], ["D.", "Resource", "Consumer"]] }],
    options: ["Resource / Intermediate", "Industrial / Intermediate", "Industrial / Consumer", "Resource / Consumer"],
    answer: 1, explain: "The farmer sells to another business using vegetables as inputs, an industrial market. The manufacturer sells to supermarkets as intermediaries." },

  { id: "21m9", topic: "marketing", type: "mcq", marks: 1, src: "2021 HSC, Section I, Q9",
    stem: "A business spends one million dollars on an advertising campaign.\n\nWhich pair of analyses could this business use to evaluate the effectiveness of this marketing strategy?",
    options: ["Market share and sales", "SWOT and market share", "Sales and product life cycle", "Product life cycle and SWOT"],
    answer: 0, explain: "Sales and market share are direct measures of advertising effectiveness." },

  { id: "21m10", topic: "operations", type: "mcq", marks: 1, src: "2021 HSC, Section I, Q10",
    stem: "A manufacturing business is a cost leader in their industry.\n\nWhich combination of features of the transformation process are they most likely to demonstrate?",
    options: ["Low volume, low variety", "High volume, low variety", "Low volume, high variety", "High volume, high variety"],
    answer: 1, explain: "Cost leadership is commonly achieved through high volume and low variety, allowing economies of scale and standardisation." },

  { id: "21m11", topic: "operations", type: "mcq", marks: 1, src: "2021 HSC, Section I, Q11",
    stem: "A mobile phone manufacturer decides to globally source inputs that they had previously produced themselves.\n\nWhich of the following shows possible negative effects of this decision?",
    options: ["Simplified logistics and delays in the supply chain", "Delays in the supply chain and increased transport costs", "Increased transport costs and reduced access to specialist suppliers", "Reduced access to specialist suppliers and a decrease in logistics costs"],
    answer: 1, explain: "Global sourcing can create supply chain delays and increase transport costs." },

  { id: "21m12", topic: "operations", type: "mcq", marks: 1, src: "2021 HSC, Section I, Q12",
    stem: "A manager at a fast-food business wants to change the operations process in response to the influence of corporate social responsibility.\n\nWhich action would achieve this objective?",
    options: ["Providing cash donations to a local hospital", "Increasing the visibility of the cooking process", "Offering a wider variety of healthy options on their menu", "Ensuring that injured workers receive access to compensation payments"],
    answer: 2, explain: "Offering healthier menu options changes the operations output in response to social responsibility expectations." },

  { id: "21m13", topic: "finance", type: "mcq", marks: 1, src: "2021 HSC, Section I, Q13",
    stem: "Consider the following financial information provided by a business.\n\nWhich of the following must have occurred between Year 1 and Year 2?",
    stimulus: [{ type: "table", headers: ["Year", "Revenue ($M)", "Gross Profit ($M)", "Net Profit ($M)"], rows: [["1", "100", "80", "30"], ["2", "80", "60", "30"]] }],
    options: ["Expenses increased", "Expenses decreased", "Cost of goods sold increased", "Cost of goods sold decreased"],
    answer: 1, explain: "Expenses fell from $50M in Year 1 to $30M in Year 2 because net profit stayed at $30M while gross profit fell from $80M to $60M." },

  { id: "21m14", topic: "operations", type: "mcq", marks: 1, src: "2021 HSC, Section I, Q14",
    stem: "A car manufacturer's marketing manager suggests to the operations manager that they increase the warranty period from 3 to 5 years in order to increase market share.\n\nThe operations manager would agree to this suggestion if",
    options: ["gearing has reduced.", "it provided an incentive to increase production speed.", "current quality management strategies could support it.", "it provided sales staff the opportunity to increase sales commissions."],
    answer: 2, explain: "A longer warranty is only viable if quality management can support durable output and reduce warranty claims." },

  { id: "21m15", topic: "human_resources", type: "mcq", marks: 1, src: "2021 HSC, Section I, Q15",
    stem: "A food delivery business made a recent change to their human resource management strategy with the following results.\n\nWhich human resource strategy is most likely to have resulted in the changes?",
    stimulus: [{ type: "table", headers: ["Indicator", "Change"], rows: [["Absenteeism", "30% decrease"], ["Deliveries per driver", "25% increase"], ["Number of accidents", "100% increase"], ["Worker satisfaction", "15% decrease"]] }],
    options: ["An increase in work health and safety training", "The reduced use of staff performance reviews", "A move from an autocratic to a democratic leadership style", "Move from a fixed salary to pay based on individual deliveries"],
    answer: 3, explain: "Pay based on individual deliveries would incentivise more deliveries but may reduce satisfaction and increase accidents." },

  { id: "21m16", topic: "marketing", type: "mcq", marks: 1, src: "2021 HSC, Section I, Q16",
    stem: "Why might a business move from a production approach to a selling approach?",
    options: ["In response to increased competition", "In order to increase promotional expenditure", "In order to better understand customer needs", "In response to an inability to satisfy current demand"],
    answer: 0, explain: "A selling approach is commonly adopted when competition increases and a business needs to persuade customers to buy." },

  { id: "21m17", topic: "human_resources", type: "mcq", marks: 1, src: "2021 HSC, Section I, Q17",
    stem: "Joe was made redundant by his employer but believes that he was dismissed unfairly. He takes his case to a lawyer.\n\nWhat evidence would effectively support the employer's decision?",
    options: ["Video of Joe stealing goods from the storeroom", "Consistent warnings over ongoing poor performance", "Financial records showing ongoing losses due to poor sales", "Documents showing that a new employee is doing Joe's job"],
    answer: 2, explain: "Redundancy is supported by evidence that the position is no longer required because of business conditions such as ongoing financial losses." },

  { id: "21m18", topic: "finance", type: "mcq", marks: 1, src: "2021 HSC, Section I, Q18",
    stem: "When a business uses factoring, they improve their",
    options: ["cash flow by increasing their revenue.", "cash flow but reduce their profitability.", "working capital by reducing their costs.", "working capital but increase their liabilities."],
    answer: 1, explain: "Factoring converts receivables into cash faster but reduces profitability because the factor charges a fee or discount." },

  { id: "21m19", topic: "finance", type: "mcq", marks: 1, src: "2021 HSC, Section I, Q19",
    stem: "An Australian farmer has been contracted to sell 1000 tonnes of oranges to an American juice manufacturer at a set price. Payment is required in 60 days in Australian dollars.\n\nWhich of the following would be an effective method of hedging in this transaction?",
    options: ["The Australian farmer using a derivative to protect themselves from a falling Australian dollar.", "The Australian farmer using a derivative to protect themselves from a falling American dollar.", "The American manufacturer using a derivative to protect themselves from a falling Australian dollar.", "The American manufacturer using a derivative to protect themselves from a falling American dollar."],
    answer: 3, explain: "The American manufacturer must pay in Australian dollars, so it needs protection if the American dollar falls against the Australian dollar." },

  { id: "21m20", topic: "finance", type: "mcq", marks: 1, src: "2021 HSC, Section I, Q20",
    stem: "Company A intends to buy Company B. Company A might pay too much for Company B if Company B's financial manager decides to",
    options: ["normalise a large one-off asset sale.", "capitalise their research and development expenses.", "fully disclose the nature of the receivables owed to the company.", "record their buildings at historical cost although they increased in value."],
    answer: 1, explain: "Capitalising research and development expenses can inflate assets and profit, leading a buyer to overvalue the business." },

// ─── 2021 Section II ──────────────────────────────────────────────────────────

  { id: "21s21a", topic: "operations", type: "short", marks: 2, src: "2021 HSC, Section II, Q21(a)",
    stem: "A building company has been contracted to build a new home for a customer. The contract requires the home to be completed within six months and within budget.\n\nOutline how this customer can be considered an input in the construction of the new home.",
    criteria: ["Sketches in general terms how this customer is an input in the construction of the new home", "Makes a relevant statement about inputs in the construction of a new home"],
    criteriaBands: [
      { marks: "2", criteria: ["Sketches in general terms how this customer is an input in the construction of the new home"] },
      { marks: "1", criteria: ["Makes a relevant statement about inputs in the construction of a new home"] },
    ],
    sample: "Customers are a transformed resource in the operations process. If the customer provides information to the builder about, for example, the materials, paint colours, or size of the house, they are acting as an input in the construction of the new home." },

  { id: "21s21b", topic: "operations", type: "short", marks: 4, src: "2021 HSC, Section II, Q21(b)",
    stem: "A building company has been contracted to build a new home for a customer. The contract requires the home to be completed within six months and within budget.\n\nHow could a Gantt chart help the building company meet the terms of the contract?",
    criteria: ["Makes evident the relationship between a Gantt chart and the way it helps the building company meet the terms of the contract", "Provides characteristics of a Gantt chart and the way it helps the building company with reference to the contract", "Sketches in general terms a Gantt chart with reference to the contract", "Makes a relevant statement about a Gantt chart"],
    criteriaBands: [
      { marks: "4", criteria: ["Makes evident the relationship between a Gantt chart and the way it helps the building company meet the terms of the contract"] },
      { marks: "3", criteria: ["Provides characteristics of a Gantt chart and the way it helps the building company with reference to the contract"] },
      { marks: "2", criteria: ["Sketches in general terms a Gantt chart with reference to the contract"] },
      { marks: "1", criteria: ["Makes a relevant statement about a Gantt chart"] },
    ],
    sample: "A sequencing and scheduling tool such as a Gantt chart could help the building company meet the terms of the contract as this tool identifies the sequence or order in which components of the home need to be built and it allocates a timeframe for each component. This allows the builder to stay within the agreed timeframe in the contract and it should improve efficiency, hence allowing them to keep to the agreed budget in the contract. For example, the Gantt chart could ensure that different tradespeople come in correct order (for example, painters don't arrive before electricians) to ensure an efficient transformation process." },

  { id: "21s21c", topic: "operations", type: "short", marks: 4, src: "2021 HSC, Section II, Q21(c)",
    stem: "A building company has been contracted to build a new home for a customer. The contract requires the home to be completed within six months and within budget.\n\nThe operations manager will need to outsource certain elements of the construction process.\n\nExplain TWO quality management strategies that could be used to ensure the quality of the outsourced work.",
    criteria: ["Clearly makes evident the relationship between each of two quality management strategies and the resulting quality of the outsourced work", "Provides characteristics and features of two quality management strategies and their effect on the quality of the work", "Sketches in general terms a quality management strategy and refers to quality of the work", "OR", "Sketches in general terms two quality management strategies", "Makes a relevant statement about quality management or outsourcing"],
    criteriaBands: [
      { marks: "4", criteria: ["Clearly makes evident the relationship between each of two quality management strategies and the resulting quality of the outsourced work"] },
      { marks: "3", criteria: ["Provides characteristics and features of two quality management strategies and their effect on the quality of the work"] },
      { marks: "2", criteria: ["Sketches in general terms a quality management strategy and refers to quality of the work", "OR", "Sketches in general terms two quality management strategies"] },
      { marks: "1", criteria: ["Makes a relevant statement about quality management or outsourcing"] },
    ],
    sample: "Outsourcing involves using other businesses to complete some activities in the construction of the house. To ensure the quality of this work, the operations manager could use a quality assurance strategy. This might involve checking that the provider has certified international standards and understands pre-determined standards which should ensure the quality of the work done by this contractor. They could also use quality control measures such as ongoing inspections of the outsourced work to ensure standards are met." },

  { id: "21s22a", topic: "finance", type: "short", marks: 2, src: "2021 HSC, Section II, Q22(a)",
    stem: "A luxury Australian handbag business is going to expand. They intend to borrow 30 million US dollars to buy several new retail properties across Australia.\n\nIdentify where the business could record the loan and the properties on its balance sheet.",
    criteria: ["States where the business would record the loan and the properties on its balance sheet", "States ONE place that this transaction would be recorded on the business's balance sheet"],
    criteriaBands: [
      { marks: "2", criteria: ["States where the business would record the loan and the properties on its balance sheet"] },
      { marks: "1", criteria: ["States ONE place that this transaction would be recorded on the business's balance sheet"] },
    ],
    sample: "The new $30m loan would be recorded as a non-current liability on this company's balance sheet and the properties would be recorded as a non-current asset." },

  { id: "21s22b", topic: "finance", type: "short", marks: 3, src: "2021 HSC, Section II, Q22(b)",
    stem: "A luxury Australian handbag business is going to expand. They intend to borrow 30 million US dollars to buy several new retail properties across Australia.\n\nExplain a financial risk associated with borrowing funds from the USA.",
    criteria: ["Provides a cause and effect relationship between the choice to borrow funds from the USA and financial risk for the business", "Sketches in general terms how borrowing from the USA could lead to financial risk for the business", "Makes a relevant statement about borrowing from overseas"],
    criteriaBands: [
      { marks: "3", criteria: ["Provides a cause and effect relationship between the choice to borrow funds from the USA and financial risk for the business"] },
      { marks: "2", criteria: ["Sketches in general terms how borrowing from the USA could lead to financial risk for the business"] },
      { marks: "1", criteria: ["Makes a relevant statement about borrowing from overseas"] },
    ],
    sample: "Exchange rate fluctuations are a financial risk the Australian handbag business needs to consider when borrowing from the US Bank. If the Australian Dollar were to depreciate against the American Dollar, the business would be required to pay back significantly more than the $30 million they borrowed. This would result in an increase in loan repayments and therefore a loss in profitability.",
    sampleBlocks: [{ type: "heading", text: "Answers could include:" }, { type: "list", items: ["An increase in US interest rates."] }] },

  { id: "21s22c", topic: "finance", type: "short", marks: 5, src: "2021 HSC, Section II, Q22(c)",
    stem: "A luxury Australian handbag business is going to expand. They intend to borrow 30 million US dollars to buy several new retail properties across Australia.\n\nThe table shows financial information for this Australian handbag business.\n\nAccount for the changes in this business's current and forecast profitability and gearing.",
    stimulus: [{ type: "table", headers: ["Ratio", "Current\n(Before loan)", "Forecast\n(12 months after loan)"], rows: [["Gross profit", "65%", "70%"], ["Net profit", "21%", "18%"], ["Debt to equity", "0.85 : 1 or 85%", "1.5 : 1 or 150%"]] }],
    criteria: ["Provides detailed reasons for the changes in the current and forecast profitability and gearing of this business", "Provides reasons for the changes in the current and forecast profitability and gearing of this business", "Provides reasons for the expected change to the profitability OR gearing of this business", "OR", "Provides characteristics and features of the changes to the profitability and gearing", "Sketches in general terms changes to either the profitability OR gearing", "Makes a relevant statement about profitability or gearing"],
    criteriaBands: [
      { marks: "5", criteria: ["Provides detailed reasons for the changes in the current and forecast profitability and gearing of this business"] },
      { marks: "4", criteria: ["Provides reasons for the changes in the current and forecast profitability and gearing of this business"] },
      { marks: "3", criteria: ["Provides reasons for the expected change to the profitability OR gearing of this business", "OR", "Provides characteristics and features of the changes to the profitability and gearing"] },
      { marks: "2", criteria: ["Sketches in general terms changes to either the profitability OR gearing"] },
      { marks: "1", criteria: ["Makes a relevant statement about profitability or gearing"] },
    ],
    sample: "The change in the forecast gearing is measured via the change to the debt to equity ratio and is likely to be a direct result of taking on the additional $30m in debt funding with no increase in equity. This new debt is likely to be responsible for the increase in the debt to equity ratio from 85% to 150%. The changes to forecast profitability are witnessed via the increased GRP and the fall in NPR. It is likely that the anticipated additional volume of sales that will be generated by the expansion will lead to increased economies of scale and purchasing power. Although their COGS would increase, the economies of scale enjoyed would increase their gross profit margin, which would lead to the higher GPR (moving from 65% to 70%). The worsening of the NPR (from 21% to 18%) may be explained by the additional interest expense payable on the loan." },

  { id: "21s23a", topic: "human_resources", type: "short", marks: 2, src: "2021 HSC, Section II, Q23(a)",
    stem: "Outline how corporate culture can affect staff turnover.",
    criteria: ["Sketches in general terms how corporate culture can affect staff turnover", "Provides relevant information about corporate culture or staff turnover"],
    criteriaBands: [
      { marks: "2", criteria: ["Sketches in general terms how corporate culture can affect staff turnover"] },
      { marks: "1", criteria: ["Provides relevant information about corporate culture or staff turnover"] },
    ],
    sample: "Corporate culture reflects the beliefs and values that are shared amongst employees in a business. A good corporate culture should reduce staff turnover, as employees will want to work for such a business, as typically, they will feel valued and respected." },

  { id: "21s23b", topic: "human_resources", type: "short", marks: 2, src: "2021 HSC, Section II, Q23(b)",
    stem: "Why might a business use a contractor to recruit staff?",
    criteria: ["Provides a relevant reason for a business to use a contractor to recruit staff", "Makes a relevant statement about contracting and/or recruitment"],
    criteriaBands: [
      { marks: "2", criteria: ["Provides a relevant reason for a business to use a contractor to recruit staff"] },
      { marks: "1", criteria: ["Makes a relevant statement about contracting and/or recruitment"] },
    ],
    sample: "Recruitment involves identifying and attracting appropriate employees for a role. A contractor could provide specialist recruitment skills that may not be present in a business which would allow the business to focus on other core functions." },

  { id: "21s23c", topic: "human_resources", type: "short", marks: 6, src: "2021 HSC, Section II, Q23(c)",
    stem: "In recent times governments have imposed restrictions on businesses such as lockdowns, social distancing and the movement of people. As a result, businesses have changed the way their employees work and communicate with each other.\n\nDiscuss the possible implications of these influences on human resource management.",
    criteria: ["Provides detailed advantages and/or disadvantages of the possible implications of these influences on human resource management", "Provides advantages and/or disadvantages of possible implications of these influences on human resource management", "Provides characteristics and features of these influences on human resource management", "Sketches in general terms aspects of human resource management and/or implications of these influences for business", "Sketches in general terms an aspect of human resource management and/or an implication of these influences for business", "Provides some relevant information about human resource management"],
    criteriaBands: [
      { marks: "6", criteria: ["Provides detailed advantages and/or disadvantages of the possible implications of these influences on human resource management"] },
      { marks: "5", criteria: ["Provides advantages and/or disadvantages of possible implications of these influences on human resource management"] },
      { marks: "4", criteria: ["Provides characteristics and features of these influences on human resource management"] },
      { marks: "3", criteria: ["Sketches in general terms aspects of human resource management and/or implications of these influences for business"] },
      { marks: "2", criteria: ["Sketches in general terms an aspect of human resource management and/or an implication of these influences for business"] },
      { marks: "1", criteria: ["Provides some relevant information about human resource management"] },
    ],
    sample: "By reducing movement of people and social distancing many businesses have had fewer customers and suffered a loss of sales. This may cause human resources management to reduce acquisition of staff and, in some cases, increase separations or reduce hours for their employees. As a result of these restrictions, businesses have used technology to allow their employees to work from home.\n\nThis presents challenges for businesses in terms of ensuring that their employees understand WHS laws in their home setting and communicate ethically and in a socially responsible manner online. This has also presented opportunities to acquire workers in remote or overseas locations who can work from home, at a potentially lower cost. WHS laws have increased training and requirements of human resources management. Businesses may reduce other training or travel expenditure on courses that may be interstate or overseas." },

  { id: "21s24a", topic: "marketing", type: "short", marks: 3, src: "2021 HSC, Section II, Q24(a)",
    stem: "Explain the benefits of customisation as a global marketing strategy.",
    criteria: ["Provides a relationship between customisation as a global marketing strategy and it's benefits", "Provides characteristics and features of customisation as a global marketing strategy", "Makes a relevant statement about customisation or global marketing"],
    criteriaBands: [
      { marks: "3", criteria: ["Provides a relationship between customisation as a global marketing strategy and it's benefits"] },
      { marks: "2", criteria: ["Provides characteristics and features of customisation as a global marketing strategy"] },
      { marks: "1", criteria: ["Makes a relevant statement about customisation or global marketing"] },
    ],
    sample: "A customised global marketing strategy requires a marketing manager to alter their marketing mix to meet the customers' tastes and preferences in different countries. Marketing managers might do this in order to successfully appeal to the different target market audience to grow sales revenue and market share in each country by altering the product price, promotion or place strategies." },

  { id: "21s24b", topic: "marketing", type: "short", marks: 3, src: "2021 HSC, Section II, Q24(b)",
    stem: "Use the following advertisement to answer parts (b) and (c).\n\nHow does this advertisement use sociocultural factors to influence customer choice?",
    stimulus: [
      { type: "heading", text: "Be the envy of your neighbours" },
      { type: "table", rows: [["The best quality fridge in the market\n\nComes with a massive 6-month warranty***", "*This weekend only\n30% off\nin-store only\n\n**Zero carbon emissions"]] },
      { type: "note", text: "*30% off not applicable to this product. **Zero carbon emissions only in houses that are zero carbon powered. ***No repairs or returns will be considered after 6 months." },
    ],
    criteria: ["Demonstrates clearly how aspect/s of the advertisement use sociocultural factors to influence customer choice", "Sketches in general terms how aspect/s of the advertisement use sociocultural factors to influence customer choice", "Makes a relevant statement about sociocultural factors"],
    criteriaBands: [
      { marks: "3", criteria: ["Demonstrates clearly how aspect/s of the advertisement use sociocultural factors to influence customer choice"] },
      { marks: "2", criteria: ["Sketches in general terms how aspect/s of the advertisement use sociocultural factors to influence customer choice"] },
      { marks: "1", criteria: ["Makes a relevant statement about sociocultural factors"] },
    ],
    sample: "This advertisement uses several sociocultural factors to encourage customers to buy the fridge. It states that if I buy this fridge I will be 'the envy of my neighbours'. This is because this fridge is the 'best quality fridge in the market', it is expensive, but I can get it at a cheaper price! These factors appeal to a customer's sense of self and where they fit in their society." },

  { id: "21s24c", topic: "marketing", type: "short", marks: 4, src: "2021 HSC, Section II, Q24(c)",
    stem: "Use the following advertisement to answer parts (b) and (c).\n\nHow might aspects of this advertisement breach Australian consumer laws?",
    stimulus: [
      { type: "heading", text: "Be the envy of your neighbours" },
      { type: "table", rows: [["The best quality fridge in the market\n\nComes with a massive 6-month warranty***", "*This weekend only\n30% off\nin-store only\n\n**Zero carbon emissions"]] },
      { type: "note", text: "*30% off not applicable to this product. **Zero carbon emissions only in houses that are zero carbon powered. ***No repairs or returns will be considered after 6 months." },
    ],
    criteria: ["Demonstrates a thorough understanding of how aspects of the advertisement might breach Australian consumer laws", "Demonstrates how aspects of the advertisement might breach Australian consumer laws", "Sketches in general terms an aspect of the advertisement that might breach Australian consumer laws", "Provides some relevant information"],
    criteriaBands: [
      { marks: "4", criteria: ["Demonstrates a thorough understanding of how aspects of the advertisement might breach Australian consumer laws"] },
      { marks: "3", criteria: ["Demonstrates how aspects of the advertisement might breach Australian consumer laws"] },
      { marks: "2", criteria: ["Sketches in general terms an aspect of the advertisement that might breach Australian consumer laws"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "This advertisement breaches Australian consumer laws by saying that it comes with a 'massive 6-month warranty'. The advertisement most likely breaches the implied conditions associated with Australian consumer laws as the length of the warranty (6 months) is not appropriately long enough relative to the expected quality represented by the best quality fridge on the market. This is most likely a breach of the acceptable quality consumer guarantee in the ACL, based on not being reasonably durable. Also, in the small print, the advertisement states that no repairs or returns will be considered after 6 months.\n\nThe body of the advertisement states that there is 30% off, but the fine print says that this discount is not available on this product. This is clearly deceptive advertising, advertising which misleads or is likely to mislead consumers, and thus is a breach of Australian consumer law as the fine print is in direct contradiction with the advertised statement." },

// ─── 2021 Section III/IV ──────────────────────────────────────────────────────

  { id: "21e25", topic: "operations", topics: ["operations", "finance"], type: "extended", marks: 20, src: "2021 HSC, Section III, Q25",
    stem: "You have been hired as a consultant by Ozzi Baby Food Pty Ltd to write a business report to the owners.\n\nIn your report:\n• outline TWO operations influences affecting this business\n• discuss the use of retraining and redundancy payments to help overcome employee resistance to these changes\n• compare the use of a mortgage to a new issue of shares to fund the factory purchase.",
    stimulus: [
      { type: "paragraph", text: "Ozzi Baby Food Pty Ltd have developed a trusted reputation in domestic and global markets due to their safe and sustainably-sourced product range. This has led to a significant increase in demand." },
      { type: "paragraph", text: "As a result, they are considering the purchase of a larger automated factory. This will lead to some job losses. The business will require external finance to fund the factory purchase using either a mortgage or becoming a public company on the Australian Securities Exchange (ASX)." },
    ],
    criteria: ["Sketches in detail the main features of two operations influences on this business", "Provides detailed reasons for and/or against the use of redundancy payments and retraining to overcome employee resistance to changes in this business", "Provides detailed similarities and differences between a mortgage and a new issue of shares to fund the factory purchase", "Makes effective use of the information provided, demonstrating extensive knowledge and understanding relevant to the question", "Presents a sustained, logical and cohesive business report integrating relevant business terminology and concepts", "Provides a sketch indicating features of two operations influences on this business", "Provides reasons for and/or against the use of redundancy payments and retraining to overcome employee resistance to changes in this business", "Provides similarities and differences between a mortgage and a new issue of shares to fund the factory", "Makes some use of the information provided, demonstrating some knowledge and understanding relevant to the question", "Presents a logical and cohesive business report using relevant business terminology and concepts", "Indicates features of operations influences on this business", "Provides some characteristics and features of redundancy payments and retraining to overcome employee resistance to changes in this business", "Provides some similarities and differences between a new issue of shares and a mortgage in relation to the purchase of the factory", "Includes features of a business report and uses some business terminology and concepts", "Identifies operations influences on this business", "Sketches briefly redundancy payments and/or retraining", "Sketches in general terms a new issue of shares and/or a mortgage", "May include some features of a business report and uses basic business terminology", "Refers to operations and/or finance", "Uses basic business terminology"],
    criteriaBands: [
      { marks: "17–20", criteria: ["Sketches in detail the main features of two operations influences on this business", "Provides detailed reasons for and/or against the use of redundancy payments and retraining to overcome employee resistance to changes in this business", "Provides detailed similarities and differences between a mortgage and a new issue of shares to fund the factory purchase", "Makes effective use of the information provided, demonstrating extensive knowledge and understanding relevant to the question", "Presents a sustained, logical and cohesive business report integrating relevant business terminology and concepts"] },
      { marks: "13–16", criteria: ["Provides a sketch indicating features of two operations influences on this business", "Provides reasons for and/or against the use of redundancy payments and retraining to overcome employee resistance to changes in this business", "Provides similarities and differences between a mortgage and a new issue of shares to fund the factory", "Makes some use of the information provided, demonstrating some knowledge and understanding relevant to the question", "Presents a logical and cohesive business report using relevant business terminology and concepts"] },
      { marks: "9–12", criteria: ["Indicates features of operations influences on this business", "Provides some characteristics and features of redundancy payments and retraining to overcome employee resistance to changes in this business", "Provides some similarities and differences between a new issue of shares and a mortgage in relation to the purchase of the factory", "Includes features of a business report and uses some business terminology and concepts"] },
      { marks: "5–8", criteria: ["Identifies operations influences on this business", "Sketches briefly redundancy payments and/or retraining", "Sketches in general terms a new issue of shares and/or a mortgage", "May include some features of a business report and uses basic business terminology"] },
      { marks: "1–4", criteria: ["Refers to operations and/or finance", "Uses basic business terminology"] },
    ],
    sample: "",
    sampleBlocks: [
      { type: "heading", text: "Answers could include:" },
      { type: "heading", text: "Operations Influences" },
      { type: "list", items: ["Globalisation, technology, quality expectations, legal regulations, environmental sustainability", "Corporate social responsibility"] },
      { type: "heading", text: "Operations Strategies" },
      { type: "list", items: ["Overcoming resistance to change", "Redundancy payments", "Retraining"] },
      { type: "heading", text: "Influences on Financial Management" },
      { type: "list", items: ["External sources of finance", "Debt – long term borrowing (mortgage)", "Equity – new issue"] },
      { type: "heading", text: "Processes of Financial Management" },
      { type: "list", items: ["Debt and equity financing – advantages and disadvantages of each", "Matching the terms and source of finance to business purpose"] },
      { type: "heading", text: "Relevant similarities and differences between a mortgage and a new issue of shares to fund the factory purchase:" },
      { type: "list", items: ["Cost of finance – interest vs dividends, establishment costs", "Ownership/control and voting rights", "Time taken to access finance", "Assets to secure finance", "Tax implications", "Effects on gearing", "Interest rate volatility or ability to fix interest rates."] },
    ] },

  { id: "21e26", topic: "marketing", type: "extended", marks: 20, src: "2021 HSC, Section IV, Q26",
    stem: "Analyse how a situational analysis (SWOT, product life cycle) may affect marketing strategies.",
    criteria: ["Draws out and clearly relates the implications of a situational analysis (SWOT, PLC) on marketing strategies", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts", "Makes evident the relationship between a situational analysis (SWOT, PLC) and marketing strategies", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts", "Provides characteristics and features of a situational analysis (SWOT, PLC) and marketing strategies", "Makes reference to case study/studies and/or contemporary business issues", "Communicates using relevant business terminology and concepts", "Sketches in general terms a situational analysis and/or marketing strategies", "May make reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and concepts", "Makes limited reference to marketing", "May identify case study/studies", "Uses basic business terminology"],
    criteriaBands: [
      { marks: "17–20", criteria: ["Draws out and clearly relates the implications of a situational analysis (SWOT, PLC) on marketing strategies", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts"] },
      { marks: "13–16", criteria: ["Makes evident the relationship between a situational analysis (SWOT, PLC) and marketing strategies", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts"] },
      { marks: "9–12", criteria: ["Provides characteristics and features of a situational analysis (SWOT, PLC) and marketing strategies", "Makes reference to case study/studies and/or contemporary business issues", "Communicates using relevant business terminology and concepts"] },
      { marks: "5–8", criteria: ["Sketches in general terms a situational analysis and/or marketing strategies", "May make reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and concepts"] },
      { marks: "1–4", criteria: ["Makes limited reference to marketing", "May identify case study/studies", "Uses basic business terminology"] },
    ],
    sample: "",
    sampleBlocks: [
      { type: "heading", text: "Answers could include:" },
      { type: "heading", text: "Marketing Process" },
      { type: "list", items: ["Situational analysis – SWOT (strengths, weaknesses, opportunities, threats)", "Product life cycle"] },
      { type: "heading", text: "Marketing Strategies" },
      { type: "list", items: ["Market segmentation, product/service differentiation and positioning", "Products – goods and/or services, branding, packaging", "Price including pricing methods – cost, market, competition-based", "Pricing strategies – skimming, penetration, loss leaders, price points", "Price and quality interaction", "Promotion – elements of the promotion mix – advertising, personal selling and relationship marketing, sales promotions, publicity and public relations", "The communication process – opinion leaders, word of mouth", "Place/distribution – distribution channels, channel choice – intensive, selective, exclusive, physical distribution issues – transport, warehousing, inventory", "People, processes and physical evidence", "E-marketing", "Global marketing – global branding, standardisation, customisation, global pricing, competitive positioning."] },
    ] },

  { id: "21e27", topic: "human_resources", type: "extended", marks: 20, src: "2021 HSC, Section IV, Q27",
    stem: "Analyse how human resource management strategies can improve the process of employee acquisition and maintenance.",
    criteria: ["Clearly draws out and relates how human resource management strategies can improve the process of employee acquisition and maintenance", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts", "Makes evident the relationship between human resource management strategies and improvement in the process of employee acquisition and maintenance", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts", "Provides characteristics and features of human resource management strategies that can improve the process of employee acquisition and maintenance", "Makes reference to case study/studies and/or contemporary business issues", "Communicates using relevant business terminology and concepts", "Sketches in general terms human resource strategies and the process of employee acquisition and/or maintenance", "May make reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and concepts", "Makes limited reference to human resource management", "May identify case study/studies", "Uses basic business terminology"],
    criteriaBands: [
      { marks: "17–20", criteria: ["Clearly draws out and relates how human resource management strategies can improve the process of employee acquisition and maintenance", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts"] },
      { marks: "13–16", criteria: ["Makes evident the relationship between human resource management strategies and improvement in the process of employee acquisition and maintenance", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts"] },
      { marks: "9–12", criteria: ["Provides characteristics and features of human resource management strategies that can improve the process of employee acquisition and maintenance", "Makes reference to case study/studies and/or contemporary business issues", "Communicates using relevant business terminology and concepts"] },
      { marks: "5–8", criteria: ["Sketches in general terms human resource strategies and the process of employee acquisition and/or maintenance", "May make reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and concepts"] },
      { marks: "1–4", criteria: ["Makes limited reference to human resource management", "May identify case study/studies", "Uses basic business terminology"] },
    ],
    sample: "",
    sampleBlocks: [
      { type: "heading", text: "Answers could include:" },
      { type: "heading", text: "Processes of human resource management:" },
      { type: "list", items: ["Acquisition", "Maintenance"] },
      { type: "heading", text: "Strategies in human resource management" },
      { type: "list", items: ["Leadership style", "Job design – general or specific tasks", "Recruitment – internal or external, general or specific skills", "Training and development – current or future skills", "Performance management – developmental or administrative", "Rewards – monetary and non-monetary, individual or group, performance pay", "Global – costs, skills, supply", "Workplace disputes – resolution – negotiation, mediation, grievance procedures, involvement of courts and tribunals."] },
    ] },

// ─── 2022 Section I ───────────────────────────────────────────────────────────

  { id: "22m1", topic: "marketing", type: "mcq", marks: 1, src: "2022 HSC, Section I, Q1",
    stem: "What is an economic factor that could influence customer choice?",
    options: ["Perception", "Recession", "Regulation", "Subculture"],
    answer: 1, explain: "A recession is an economic factor reducing disposable income. Perception is psychological; regulation is legal; subculture is sociocultural." },

  { id: "22m2", topic: "human_resources", type: "mcq", marks: 1, src: "2022 HSC, Section I, Q2",
    stem: "Which of the following is a type of voluntary separation in the workplace?",
    options: ["Dismissal", "Layoff", "Resignation", "Retrenchment"],
    answer: 2, explain: "Resignation is the only voluntary separation, the employee chooses to leave. The other three are employer-initiated." },

  { id: "22m3", topic: "marketing", type: "mcq", marks: 1, src: "2022 HSC, Section I, Q3",
    stem: "Which of the following is a pair of primary data collection methods?",
    options: ["Questionnaires and industry reports", "Industry reports and internet sources", "Personal interviews and questionnaires", "Internet sources and personal interviews"],
    answer: 2, explain: "Personal interviews and questionnaires are both primary, collected first-hand. Industry reports and internet sources are secondary data." },

  { id: "22m4", topic: "operations", type: "mcq", marks: 1, src: "2022 HSC, Section I, Q4",
    stem: "A watch manufacturer uses price-skimming strategies and provides a lifetime warranty on their products. What would most likely have influenced the implementation of these strategies?",
    options: ["Legal compliance", "Quality expectations", "Ethical responsibility", "Cost-based competition"],
    answer: 1, explain: "Quality expectations drive both premium pricing (price skimming) and a lifetime warranty, both signal and guarantee product durability." },

  { id: "22m5", topic: "marketing", type: "mcq", marks: 1, src: "2022 HSC, Section I, Q5",
    stem: "The characteristics of lifestyle, motivation and personality are most often used in which market segmentation strategy?",
    options: ["Behavioural", "Demographic", "Geographic", "Psychographic"],
    answer: 3, explain: "Psychographic segmentation divides by psychological traits, lifestyle, values, personality, and motivation. Demographic uses age/income; geographic uses location." },

  { id: "22m6", topic: "human_resources", type: "mcq", marks: 1, src: "2022 HSC, Section I, Q6",
    stem: "All staff in a business participate equally in a profit-sharing scheme. Which row of the table correctly identifies this reward strategy?",
    stimulus: [{ type: "table", headers: ["", "Reward", "Staff"], rows: [["A.", "Monetary", "Group"], ["B.", "Monetary", "Individual"], ["C.", "Non-monetary", "Group"], ["D.", "Non-monetary", "Individual"]] }],
    options: ["Monetary / Group", "Monetary / Individual", "Non-monetary / Group", "Non-monetary / Individual"],
    answer: 0, explain: "Profit-sharing is a monetary (cash/financial) reward distributed equally across all staff, making it a group reward, not tied to individual performance." },

  { id: "22m7", topic: "operations", type: "mcq", marks: 1, src: "2022 HSC, Section I, Q7",
    stem: "A large clothing manufacturer in NSW wants to reduce input costs. Which strategy would achieve this objective?",
    options: ["Increasing product variety", "Increasing employee training", "Implementing global sourcing", "Implementing sustainable packaging"],
    answer: 2, explain: "Global sourcing accesses lower-cost inputs from international suppliers, directly reducing input costs. Training and variety increase costs; sustainable packaging may raise them." },

  { id: "22m8", topic: "human_resources", type: "mcq", marks: 1, src: "2022 HSC, Section I, Q8",
    stem: "A business has implemented a training program in the use of new machinery on the factory floor for its employees. What is the main reason for this training program?",
    options: ["To prevent accidents", "To reduce absenteeism", "To reduce staff turnover", "To improve corporate culture"],
    answer: 0, explain: "WH&S obligations require training employees in safe use of machinery. The primary reason for machinery-specific training is accident prevention, satisfying the legal duty of care." },

  { id: "22m9", topic: "human_resources", type: "mcq", marks: 1, src: "2022 HSC, Section I, Q9",
    stem: "An employee has been bullied at work and has lodged a complaint. What initial action should the employer take to resolve this dispute?",
    options: ["Arbitration", "Conciliation", "Mediation", "Negotiation"],
    answer: 3, explain: "Negotiation is the first, least formal step, the parties attempt direct resolution. Mediation, conciliation, and arbitration involve third parties and escalate in formality." },

  { id: "22m10", topic: "operations", type: "mcq", marks: 1, src: "2022 HSC, Section I, Q10",
    stem: "A printing business uses chemicals in its production process. Which of the following factors has a legal regulation that affects the operations management of this business?",
    options: ["Superannuation", "Code of conduct", "Union membership", "Environmental protection"],
    answer: 3, explain: "Environmental protection laws regulate chemical waste disposal and directly affect operations. Superannuation and union membership are HR/legal matters; codes of conduct are internal ethical frameworks." },

  { id: "22m11", topic: "marketing", type: "mcq", marks: 1, src: "2022 HSC, Section I, Q11",
    stem: "Which of the following is correct for the growth phase of the product life cycle?",
    stimulus: [{ type: "table", headers: ["", "Production", "Price"], rows: [["A.", "Decreased", "Maintained"], ["B.", "Maintained", "Increased"], ["C.", "Increased", "Increased"], ["D.", "Increased", "Maintained"]] }],
    options: ["Production decreased; price maintained", "Production maintained; price increased", "Production increased; price increased", "Production increased; price maintained"],
    answer: [2, 3], explain: "The official marking guideline accepts C and D for this question." },

  { id: "22m12", topic: "operations", type: "mcq", marks: 1, src: "2022 HSC, Section I, Q12",
    stem: "Which of the following is an example of service differentiation?",
    options: ["A car manufacturer supplies cars with premium tinted windows.", "A chemist issues a patient with medication in exchange for a script.", "A shoe store assistant spends varying amounts of time with customers.", "A salesperson provides a receipt to a customer who has purchased a bed."],
    answer: 2, explain: "Service differentiation means varying the service experience. Spending varying time with different customers adapts the service to individual needs. The other options are standard goods transactions." },

  { id: "22m13", topic: "finance", type: "mcq", marks: 1, src: "2022 HSC, Section I, Q13",
    stem: "Which combination of global market influences would support a business's decision to expand globally?",
    options: ["A depressed economic outlook and low interest rates", "A depressed economic outlook and high interest rates", "An improved economic outlook and low interest rates", "An improved economic outlook and high interest rates"],
    answer: 2, explain: "An improved economic outlook boosts consumer spending (demand for exports) and low interest rates reduce borrowing costs for expansion, both conditions support global expansion." },

  { id: "22m14", topic: "finance", type: "mcq", marks: 1, src: "2022 HSC, Section I, Q14",
    stem: "A private investment company accepts money from clients. The owner illegally uses this money for their own personal use. Which government body would take legal action against the owner of this company?",
    options: ["Australian Taxation Office", "Australian Securities Exchange", "Australian Prudential Regulation Authority", "Australian Securities and Investments Commission"],
    answer: 3, explain: "ASIC regulates investment companies and enforces laws against financial fraud such as misappropriation of client funds. APRA regulates banks/insurance; ASX operates the stock exchange." },

  { id: "22m15", topic: "operations", type: "mcq", marks: 1, src: "2022 HSC, Section I, Q15",
    stem: "Heidi has a small farm that has a variety of animals, including chickens. She would like to sell the excess chicken eggs to customers. Which distribution method would best support her situation?",
    options: ["Producer → consumer", "Producer → retailer → consumer", "Producer → wholesaler → consumer", "Producer → agent → retailer → consumer"],
    answer: 0, explain: "A small farm selling directly to local customers uses the shortest channel. Longer channels involve intermediaries that take margin and are unsuitable for small-scale perishable items." },

  { id: "22m16", topic: "marketing", type: "mcq", marks: 1, src: "2022 HSC, Section I, Q16",
    stem: "Which of the following could be a disadvantage of using a price penetration strategy for a business?",
    options: ["A large number of products are sold quickly", "The business has problems in trying to raise prices later", "New competitors find it more difficult to enter the market", "Customers are discouraged from purchasing the product immediately"],
    answer: 1, explain: "Price penetration attracts price-sensitive customers at a low price; raising prices later risks losing those customers. The other options describe advantages or characterise price skimming." },

  { id: "22m17", topic: "marketing", type: "mcq", marks: 1, src: "2022 HSC, Section I, Q17",
    stem: "A florist purchases flowers to create flower arrangements. What type of market does the florist operate in?",
    options: ["Consumer", "Industrial", "Mass", "Resource"],
    answer: 1, explain: "The florist buys flowers as inputs for their business product, this is a business-to-business (industrial) market. Consumer markets sell to individuals for personal use." },

  { id: "22m18", topic: "finance", type: "mcq", marks: 1, src: "2022 HSC, Section I, Q18",
    stem: "A business owns a $2 million building with a $500 000 mortgage. They decide to sell the building and lease it back from the new owners over five years. What is the likely purpose of this financial strategy?",
    options: ["Reduce liquidity", "Reduce cash flow", "Improve profitability", "Improve working capital"],
    answer: 3, explain: "Sale and lease-back converts a fixed asset into cash, immediately improving working capital. It generates a cash inflow (not reduces it) and does not directly increase profitability." },

  { id: "22m19", topic: "operations", type: "mcq", marks: 1, src: "2022 HSC, Section I, Q19",
    stem: "A large cake business is going to offer a contract to another business to make their cake decorations. Which business functions would provide input into the contract details?",
    options: ["Finance, operations and marketing", "Finance, marketing and human resources", "Operations, human resources and finance", "Operations, marketing and human resources"],
    answer: 2, explain: "Outsourcing a production input involves: operations (specifications/quality), finance (cost/payment terms), and HR (workforce implications). Marketing is not directly involved in a supplier contract." },

  { id: "22m20", topic: "finance", type: "mcq", marks: 1, src: "2022 HSC, Section I, Q20",
    stem: "A business provides the following financial information.\n\nWhich of the following reflects the changes to profitability in Year 2?",
    stimulus: [
      { type: "table", headers: ["", "Year 1 ($)", "Year 2 ($)"], rows: [["Sales", "600 000", "700 000"], ["Cost of goods sold", "200 000", "200 000"], ["Gross profit", "?", "?"], ["Expenses", "250 000", "200 000"], ["Net profit", "?", "?"]] },
      { type: "note", text: "Other financial information: Owner's equity – $500 000 (return on owner's equity: net profit ÷ owner's equity). Gross profit ratio (industry average) – 78% (gross profit ratio: gross ÷ sales)." },
    ],
    options: ["Return on owner's equity has improved and the gross profit ratio is worse than the industry average", "Return on owner's equity has worsened and the gross profit ratio is worse than the industry average", "Return on owner's equity has improved and the gross profit ratio is better than the industry average", "Return on owner's equity has worsened and the gross profit ratio is better than the industry average"],
    answer: 0, explain: "Year 1: ROE = $150k/$500k = 30%, GPR = 66.7%. Year 2: ROE = $300k/$500k = 60%, GPR = 71.4%. ROE improved; GPR of 71.4% is still below the 78% industry average." },

// ─── 2022 Section II ──────────────────────────────────────────────────────────

  { id: "22s21a", topic: "operations", type: "short", marks: 2, src: "2022 HSC, Section II, Q21(a)",
    stem: "Michael would like to open a new burger restaurant. Outline a performance objective relevant to this business.",
    criteria: ["Sketches in general terms a performance objective relevant to the business", "Identifies an objective for this business"],
    criteriaBands: [
      { marks: "2", criteria: ["Sketches in general terms a performance objective relevant to the business"] },
      { marks: "1", criteria: ["Identifies an objective for this business"] },
    ],
    sample: "Dependability would be a key performance objective for this business as customers expect consistency. They want their burgers to be served in the same timeframe, be the same size, temperature and taste each time they purchase one.",
    sampleBlocks: [{ type: "heading", text: "Answers could include:" }, { type: "list", items: ["Quality, speed, dependability, flexibility, customisation, cost."] }] },

  { id: "22s21b", topic: "operations", type: "short", marks: 3, src: "2022 HSC, Section II, Q21(b)",
    stem: "Michael would like to open a new burger restaurant. Recommend an appropriate inventory management strategy for this business.",
    criteria: ["Provides reasons in favour of an appropriate inventory management strategy for the business", "Provides a reason in favour of an appropriate inventory management strategy for the business", "Makes a relevant statement about inventory management"],
    criteriaBands: [
      { marks: "3", criteria: ["Provides reasons in favour of an appropriate inventory management strategy for the business"] },
      { marks: "2", criteria: ["Provides a reason in favour of an appropriate inventory management strategy for the business"] },
      { marks: "1", criteria: ["Makes a relevant statement about inventory management"] },
    ],
    sample: "Just-in-time would be an effective inventory method as it would allow the business to take advantage of fresh produce as it arrives. This would also save them storage space and the costs associated with this.",
    sampleBlocks: [{ type: "heading", text: "Answers could include:" }, { type: "list", items: ["Last in first out", "First in first out."] }] },

  { id: "22s21c", topic: "operations", type: "short", marks: 4, src: "2022 HSC, Section II, Q21(c)",
    stem: "Michael is considering which process layout would be the most efficient for this restaurant.\n\nCompare each layout in terms of efficiency and profitability.",
    stimulus: [
      { type: "table", caption: "Process layout option 1", rows: [["", "Stove", "Raw meat\nrefrigerator", "Finished\nburgers"], ["Burger assembly\nstation", "Seating area", "", "Cash registers"], ["", "", "", "Entrance"]] },
      { type: "table", caption: "Process layout option 2", rows: [["", "Stove", "", ""], ["", "", "Burger assembly\nstation", "Finished\nburgers"], ["Raw meat\nrefrigerator", "Seating area", "", "Cash registers"], ["", "", "", "Entrance"]] },
    ],
    criteria: ["Provides detailed similarities and/or differences about the efficiency and profitability of each layout", "Provides some similarities and/or differences about efficiency and profitability of each layout", "Provides similarities and/or differences about efficiency and/or profitability of the layouts", "Provides relevant information about process layout"],
    criteriaBands: [
      { marks: "4", criteria: ["Provides detailed similarities and/or differences about the efficiency and profitability of each layout"] },
      { marks: "3", criteria: ["Provides some similarities and/or differences about efficiency and profitability of each layout"] },
      { marks: "2", criteria: ["Provides similarities and/or differences about efficiency and/or profitability of the layouts"] },
      { marks: "1", criteria: ["Provides relevant information about process layout"] },
    ],
    sample: "The layout of option 2 allows employees to make a finished burger efficiently as the process to make burgers is sequential. In comparison, option 1's narrow kitchen layout requires employees to go back and forth between work stations to make the burger which could lead to accidents and time lost, causing it to be more inefficient. Option 1 has more tables which could seat more customers and therefore increase profitability compared to option 2 which has fewer tables for dine-in customers, therefore it is unable to maximise profitability." },

  { id: "22s22a", topic: "human_resources", type: "short", marks: 2, src: "2022 HSC, Section II, Q22(a)",
    stem: "Outline how an increase in the minimum wage rate could affect business.",
    criteria: ["Sketches in general terms the effect an increase in the minimum wage has on business", "Makes a general statement about minimum wage"],
    criteriaBands: [
      { marks: "2", criteria: ["Sketches in general terms the effect an increase in the minimum wage has on business"] },
      { marks: "1", criteria: ["Makes a general statement about minimum wage"] },
    ],
    sample: "An increase in the minimum wage is likely to increase on-costs for businesses. This may lead to businesses passing these costs on to consumers or it may reduce profitability as business expenses rise." },

  { id: "22s22b", topic: "human_resources", type: "short", marks: 3, src: "2022 HSC, Section II, Q22(b)",
    stem: "Outline how the minimum employment standards protect employees in Australia. Use examples in your answer.",
    criteria: ["Sketches in general terms how minimum employment standards protect employees using examples", "Sketches in general terms how minimum employment standards protect employees and may provide example(s)", "Makes a relevant statement about minimum employment standards"],
    criteriaBands: [
      { marks: "3", criteria: ["Sketches in general terms how minimum employment standards protect employees using examples"] },
      { marks: "2", criteria: ["Sketches in general terms how minimum employment standards protect employees and may provide example(s)"] },
      { marks: "1", criteria: ["Makes a relevant statement about minimum employment standards"] },
    ],
    sample: "Minimum employment standards include eleven legally mandated standards that provide basic protections for all employees. The minimum standards outline basic employee rights in the workplace, regardless of the type of employment contract. For example, all full-time workers are provided with the right to four weeks annual leave and a paid day off on public holidays." },

  { id: "22s22c", topic: "human_resources", type: "short", marks: 3, src: "2022 HSC, Section II, Q22(c)",
    stem: "How are performance appraisals of employees beneficial to employers?",
    criteria: ["Provides the ways performance appraisals are beneficial to employers", "Provides a way performance appraisals are beneficial to employers", "Makes a relevant statement about performance appraisals"],
    criteriaBands: [
      { marks: "3", criteria: ["Provides the ways performance appraisals are beneficial to employers"] },
      { marks: "2", criteria: ["Provides a way performance appraisals are beneficial to employers"] },
      { marks: "1", criteria: ["Makes a relevant statement about performance appraisals"] },
    ],
    sample: "Performance appraisals can be developmental or administrative. They allow employers to provide feedback to employees about their performance and can be used to identify their training and development needs. They can also be used to reward and incentivise employees for high performance." },

  { id: "22s22d", topic: "human_resources", type: "short", marks: 3, src: "2022 HSC, Section II, Q22(d)",
    stem: "Explain the importance of carrying out an induction program for new employees.",
    criteria: ["Provides why and/or how an induction program for new employees is important", "Provides characteristics and features of the induction process for new employees", "Makes a relevant statement about induction"],
    criteriaBands: [
      { marks: "3", criteria: ["Provides why and/or how an induction program for new employees is important"] },
      { marks: "2", criteria: ["Provides characteristics and features of the induction process for new employees"] },
      { marks: "1", criteria: ["Makes a relevant statement about induction"] },
    ],
    sample: "The induction process introduces new employees to the workplace. Induction can enhance employee understanding of workplace culture, policies and procedures, allowing them to make a significant contribution to the business from the outset of their employment enhancing employee competence, providing a positive attitude to the job and the business." },

  { id: "22s23a", topic: "finance", type: "short", marks: 1, src: "2022 HSC, Section II, Q23(a)",
    stem: "A gifts and homewares business sells goods such as candles, bags, cushions, soaps and jewellery.\n\nThey have provided the following financial information.\n\nCalculate the efficiency (total expenses ÷ total sales) of this business.",
    stimulus: [{ type: "table", headers: ["", "($)"], rows: [["Operating income (revenue)", "1 500 000"], ["Gross profit", "1 100 000"], ["Expenses", "600 000"], ["Total liabilities", "2 000 000"], ["Net profit", "500 000"], ["Owner's equity", "1 800 000"]] }],
    criteria: ["Correctly calculates the efficiency of the business"],
    criteriaBands: [{ marks: "1", criteria: ["Correctly calculates the efficiency of the business"] }],
    sample: "Total expenses ÷ total sales = $600 000 ÷ $1 500 000 = 40% (or 0.4 : 1)" },

  { id: "22s23b", topic: "finance", type: "short", marks: 3, src: "2022 HSC, Section II, Q23(b)",
    stem: "A gifts and homewares business sells goods such as candles, bags, cushions, soaps and jewellery.\n\nThey have provided the following financial information.\n\nExplain how the expense ratio can help this business determine their efficiency.",
    stimulus: [{ type: "table", headers: ["", "($)"], rows: [["Operating income (revenue)", "1 500 000"], ["Gross profit", "1 100 000"], ["Expenses", "600 000"], ["Total liabilities", "2 000 000"], ["Net profit", "500 000"], ["Owner's equity", "1 800 000"]] }],
    criteria: ["Clearly shows the relationship between the expense ratio and the business' efficiency", "Provides characteristics and features of the expense ratio and business' efficiency", "Makes a relevant statement about the expense ratio or efficiency"],
    criteriaBands: [
      { marks: "3", criteria: ["Clearly shows the relationship between the expense ratio and the business' efficiency"] },
      { marks: "2", criteria: ["Provides characteristics and features of the expense ratio and business' efficiency"] },
      { marks: "1", criteria: ["Makes a relevant statement about the expense ratio or efficiency"] },
    ],
    sample: "Efficiency is a measure of the ability of a business to use its resources effectively. The gifts and homewares business are currently spending $0.40 in expenses for every $1 of sales. The lower this expense ratio is, the more efficient the business is. If this business can reduce their indirect costs and maintain or increase sales, they demonstrate that they are able to use resources effectively and improve their profitability." },

  { id: "22s23c", topic: "finance", type: "short", marks: 3, src: "2022 HSC, Section II, Q23(c)",
    stem: "A gifts and homewares business sells goods such as candles, bags, cushions, soaps and jewellery.\n\nThey have provided the following financial information.\n\nThe family-owned business is considering expansion by opening two new stores. Their bank has given approval to borrow $3 000 000 at 4% interest to finance their expansion.\n\nWhy is the level of gearing an important consideration for the lender to this business?",
    stimulus: [{ type: "table", headers: ["", "($)"], rows: [["Operating income (revenue)", "1 500 000"], ["Gross profit", "1 100 000"], ["Expenses", "600 000"], ["Total liabilities", "2 000 000"], ["Net profit", "500 000"], ["Owner's equity", "1 800 000"]] }],
    criteria: ["Provides a reason for gearing being an important consideration for the lender to this business", "Demonstrates an understanding of a reason the level of gearing is an important consideration", "Provides some relevant information about gearing"],
    criteriaBands: [
      { marks: "3", criteria: ["Provides a reason for gearing being an important consideration for the lender to this business"] },
      { marks: "2", criteria: ["Demonstrates an understanding of a reason the level of gearing is an important consideration"] },
      { marks: "1", criteria: ["Provides some relevant information about gearing"] },
    ],
    sample: "Gearing refers to the ability of a business to meet its financial obligations in the longer term. It can help the lender to this business understand their risk and determine the ability of the business to meet its loan repayments, helping them decide whether to lend the business money, or not. In this case the business gearing would indicate they can repay their debt." },

  { id: "22s23d", topic: "finance", type: "short", marks: 4, src: "2022 HSC, Section II, Q23(d)",
    stem: "A gifts and homewares business sells goods such as candles, bags, cushions, soaps and jewellery.\n\nThey have provided the following financial information.\n\nThe family-owned business is considering expansion by opening two new stores. Their bank has given approval to borrow $3 000 000 at 4% interest to finance their expansion.\n\nUsing the financial information provided, explain why the business should use debt finance to acquire the two new stores.",
    stimulus: [{ type: "table", headers: ["", "($)"], rows: [["Operating income (revenue)", "1 500 000"], ["Gross profit", "1 100 000"], ["Expenses", "600 000"], ["Total liabilities", "2 000 000"], ["Net profit", "500 000"], ["Owner's equity", "1 800 000"]] }],
    criteria: ["Using financial information, clearly provides reasons why the business should use debt finance to acquire the two new stores", "Provides reasons why the business should use debt finance to acquire the two new stores", "Sketches in general terms a reason for the business using debt finance", "Makes a relevant statement about debt and/or finance"],
    criteriaBands: [
      { marks: "4", criteria: ["Using financial information, clearly provides reasons why the business should use debt finance to acquire the two new stores"] },
      { marks: "3", criteria: ["Provides reasons why the business should use debt finance to acquire the two new stores"] },
      { marks: "2", criteria: ["Sketches in general terms a reason for the business using debt finance"] },
      { marks: "1", criteria: ["Makes a relevant statement about debt and/or finance"] },
    ],
    sample: "The gifts and homewares business should use debt finance to purchase their new stores because of the relatively low interest rate of 4% they can access. Currently with a $500 000 net profit and potential for this to increase due to the new stores they will be able to meet their increased debt obligations. Debt finance also allows the business to access the money relatively quickly and as the borrowed money is forecast to create increased profits, it seems like an appropriate decision. Additionally, there is no loss of ownership in the family-owned business." },

  { id: "22s24a", topic: "marketing", type: "short", marks: 2, src: "2022 HSC, Section II, Q24(a)",
    stem: "A business wishes to introduce new products into the market. Outline ONE promotion strategy this business could use to launch the new product range.",
    criteria: ["Sketches in general terms one promotion strategy to launch the new product range", "Identifies a promotion strategy"],
    criteriaBands: [
      { marks: "2", criteria: ["Sketches in general terms one promotion strategy to launch the new product range"] },
      { marks: "1", criteria: ["Identifies a promotion strategy"] },
    ],
    sample: "The business could use advertising via television or social media to launch their new product range. This would alert potential customers to their new products using different media." },

  { id: "22s24b", topic: "marketing", type: "short", marks: 3, src: "2022 HSC, Section II, Q24(b)",
    stem: "A business wishes to introduce new products into the market. How will the business know that their marketing plan has been successful for a new product range?",
    criteria: ["Demonstrates a clear understanding of the way the business will know the marketing plan has been successful", "Demonstrates an understanding of the way the business will know the marketing plan has been successful", "Makes a relevant statement about the marketing plan"],
    criteriaBands: [
      { marks: "3", criteria: ["Demonstrates a clear understanding of the way the business will know the marketing plan has been successful"] },
      { marks: "2", criteria: ["Demonstrates an understanding of the way the business will know the marketing plan has been successful"] },
      { marks: "1", criteria: ["Makes a relevant statement about the marketing plan"] },
    ],
    sample: "In the marketing plan, the business would have developed a financial forecast that included the cost and potential sales of the new product range. The business could monitor and control the marketing plan, comparing actual with planned results in terms of sales and market share to determine the success of their new product range." },

  { id: "22s24c", topic: "marketing", type: "short", marks: 4, src: "2022 HSC, Section II, Q24(c)",
    stem: "A business wishes to introduce new products into the market. Why should this business adopt a marketing approach instead of a selling approach?",
    criteria: ["Provides reasons why the business should adopt the marketing approach instead of the selling approach", "Provides a reason why the business should adopt the marketing approach instead of the selling approach", "Sketches in general terms the marketing approach and/or the selling approach", "Makes a relevant statement"],
    criteriaBands: [
      { marks: "4", criteria: ["Provides reasons why the business should adopt the marketing approach instead of the selling approach"] },
      { marks: "3", criteria: ["Provides a reason why the business should adopt the marketing approach instead of the selling approach"] },
      { marks: "2", criteria: ["Sketches in general terms the marketing approach and/or the selling approach"] },
      { marks: "1", criteria: ["Makes a relevant statement"] },
    ],
    sample: "The business should adopt the marketing approach instead of the selling approach as the selling approach is focused mostly on selling due to increased competition and it often neglects the needs of the customer. By using the marketing approach the business can find out what the customer wants and can satisfy their needs. This is usually achieved through market research and finding out customer needs and wants prior to introducing new products into a market." },

// ─── 2022 Section III/IV ──────────────────────────────────────────────────────

  { id: "22e25", topic: "marketing", topics: ["marketing", "finance"], type: "extended", marks: 20, src: "2022 HSC, Section III, Q25",
    stem: "You have been hired as a consultant by Bee Sticky Pty Ltd to write a business report for the owners.\n\nIn your report:\n• describe branding and product strategies the business could use to expand into global markets\n• recommend a channel choice that would suit this business's expansion\n• analyse the global financial management strategies required for a successful expansion.",
    stimulus: [
      { type: "paragraph", text: "Bee Sticky Pty Ltd is an established Australian manufacturing business that produces a wide range of high quality and premium organic honey. It is expanding into global markets. It will lease warehouses in Malaysia and the USA." },
      { type: "paragraph", text: "The company has provided you with a recently completed SWOT analysis." },
      { type: "table", caption: "SWOT analysis", headers: ["Strengths", "Weaknesses"], rows: [["High quality, premium and organic honey products\n\nApproved for consumption and medical uses\n\nMade by honeybees from Australian flora", "Frequent breakage of product during transportation\n\nLack of experience in foreign payment systems"]] },
      { type: "table", headers: ["Opportunities", "Threats"], rows: [["Expanding market for high quality honey in countries overseas\n\nFalling bee populations overseas\n\nPotential collaborations with up-market restaurants/chefs", "Established competition in foreign markets\n\nFluctuations in the Australian dollar"]] },
    ],
    criteria: ["Provides a detailed description of product and branding strategies that the company could use to expand into global markets", "Provides detailed reasons in favour of a channel choice for the company", "Draws out and relates the implications of global financial management strategies for the company", "Applies the information provided, demonstrating extensive knowledge and understanding relevant to the question", "Presents a sustained, logical and cohesive business report integrating relevant business terminology and concepts", "Provides a description of product and branding strategies that the company could use to expand into global markets", "Provides some reasons in favour of a channel choice for the company", "Makes evident the impact of global financial management strategies for the company", "Uses the information provided, demonstrating knowledge and understanding relevant to the question", "Presents a logical and cohesive business report using relevant business terminology and concepts", "Outlines a product and/or branding strategy that the company could use", "Provides a description of channel choice for the company", "Provides a description of a global financial management strategy/ies", "Makes some use of the information provided", "Includes features of a business report and uses some business terminology and concepts", "Outlines a product and/or branding strategy", "Outlines a channel choice", "Indicates a feature of a financial management strategy", "May include some features of a business report and uses some basic business terminology", "Refers to marketing and/or finance", "Uses basic business terminology"],
    criteriaBands: [
      { marks: "17–20", criteria: ["Provides a detailed description of product and branding strategies that the company could use to expand into global markets", "Provides detailed reasons in favour of a channel choice for the company", "Draws out and relates the implications of global financial management strategies for the company", "Applies the information provided, demonstrating extensive knowledge and understanding relevant to the question", "Presents a sustained, logical and cohesive business report integrating relevant business terminology and concepts"] },
      { marks: "13–16", criteria: ["Provides a description of product and branding strategies that the company could use to expand into global markets", "Provides some reasons in favour of a channel choice for the company", "Makes evident the impact of global financial management strategies for the company", "Uses the information provided, demonstrating knowledge and understanding relevant to the question", "Presents a logical and cohesive business report using relevant business terminology and concepts"] },
      { marks: "9–12", criteria: ["Outlines a product and/or branding strategy that the company could use", "Provides a description of channel choice for the company", "Provides a description of a global financial management strategy/ies", "Makes some use of the information provided", "Includes features of a business report and uses some business terminology and concepts"] },
      { marks: "5–8", criteria: ["Outlines a product and/or branding strategy", "Outlines a channel choice", "Indicates a feature of a financial management strategy", "May include some features of a business report and uses some basic business terminology"] },
      { marks: "1–4", criteria: ["Refers to marketing and/or finance", "Uses basic business terminology"] },
    ],
    sample: "",
    sampleBlocks: [
      { type: "heading", text: "Answers could include:" },
      { type: "heading", text: "Product strategies" },
      { type: "list", items: ["Branding", "Packaging"] },
      { type: "heading", text: "Global branding/standardisation" },
      { type: "heading", text: "Channel choice" },
      { type: "list", items: ["Intensive", "Selective", "Exclusive"] },
      { type: "heading", text: "Global financial management strategies" },
      { type: "list", items: ["Exchange rates", "Interest rates", "Methods of international payment", "Hedging", "Derivatives."] },
    ] },

  { id: "22e26", topic: "human_resources", type: "extended", marks: 20, src: "2022 HSC, Section IV, Q26",
    stem: "Explain the importance to a business of having human resources strategies that reduce workplace disputes and increase worker satisfaction.",
    criteria: ["Provides a detailed explanation of the importance to a business of having human resource strategies that reduce workplace disputes and increase worker satisfaction", "Integrates relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts", "Provides a sound explanation of the importance to a business of having human resource strategies that reduce workplace disputes and increase worker satisfaction", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts", "Describes the importance to a business of having human resource strategies that reduce workplace disputes and increase worker satisfaction", "May make reference to case study/studies and contemporary business issues", "Communicates using business terminology and concepts", "Makes some reference to human resources strategies that are important to levels of disputation and/or worker satisfaction", "May make limited reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and concepts", "Makes limited reference to human resource strategies", "May identify case study/studies", "Uses basic business terminology"],
    criteriaBands: [
      { marks: "17–20", criteria: ["Provides a detailed explanation of the importance to a business of having human resource strategies that reduce workplace disputes and increase worker satisfaction", "Integrates relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts"] },
      { marks: "13–16", criteria: ["Provides a sound explanation of the importance to a business of having human resource strategies that reduce workplace disputes and increase worker satisfaction", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts"] },
      { marks: "9–12", criteria: ["Describes the importance to a business of having human resource strategies that reduce workplace disputes and increase worker satisfaction", "May make reference to case study/studies and contemporary business issues", "Communicates using business terminology and concepts"] },
      { marks: "5–8", criteria: ["Makes some reference to human resources strategies that are important to levels of disputation and/or worker satisfaction", "May make limited reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and concepts"] },
      { marks: "1–4", criteria: ["Makes limited reference to human resource strategies", "May identify case study/studies", "Uses basic business terminology"] },
    ],
    sample: "",
    sampleBlocks: [
      { type: "heading", text: "Answers could include:" },
      { type: "heading", text: "Strategies in human resource management" },
      { type: "list", items: ["Leadership style", "Job design – general or specific tasks", "Recruitment – internal or external, general or specific skills", "Training and development – current and future skills", "Performance management – developmental or administrative", "Rewards – monetary and non-monetary, individual or group, performance pay", "Global – costs, skills, supply", "Workplace disputes – resolution – negotiation, meditation, grievance procedures, involvement of courts and tribunals"] },
    ] },

  { id: "22e27", topic: "operations", type: "extended", marks: 20, src: "2022 HSC, Section IV, Q27",
    stem: "Explain the importance to a business of having operations processes that can maintain a competitive advantage.",
    criteria: ["Provides a detailed explanation of why operation processes are important in maintaining a competitive advantage", "Integrates relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts", "Provides a sound explanation of why operation processes are important in maintaining a competitive advantage", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts", "Describes why operation processes and/or strategies are important in maintaining a competitive advantage", "May make reference to case study/studies and contemporary business issues", "Communicates using business terminology and concepts", "Makes some reference to operations processes and/or strategies and/or competitive advantage", "May make limited reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and concepts", "Makes limited reference to operations", "May identify case study/studies", "Uses basic business terminology"],
    criteriaBands: [
      { marks: "17–20", criteria: ["Provides a detailed explanation of why operation processes are important in maintaining a competitive advantage", "Integrates relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts"] },
      { marks: "13–16", criteria: ["Provides a sound explanation of why operation processes are important in maintaining a competitive advantage", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts"] },
      { marks: "9–12", criteria: ["Describes why operation processes and/or strategies are important in maintaining a competitive advantage", "May make reference to case study/studies and contemporary business issues", "Communicates using business terminology and concepts"] },
      { marks: "5–8", criteria: ["Makes some reference to operations processes and/or strategies and/or competitive advantage", "May make limited reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and concepts"] },
      { marks: "1–4", criteria: ["Makes limited reference to operations", "May identify case study/studies", "Uses basic business terminology"] },
    ],
    sample: "",
    sampleBlocks: [
      { type: "heading", text: "Answers could include:" },
      { type: "heading", text: "Operations processes" },
      { type: "list", items: ["Inputs – transformed resources (materials, information, customers)", "Inputs – transforming resources (facilities and human resources)", "Transformation processes – the influence of volume, variety, variation in demand and visibility (customer contact)", "Sequencing and scheduling – Gantt charts, critical path analysis", "Technology, task design and process layout", "Monitoring, control and improvement", "Outputs – customer service, warranties"] },
      { type: "paragraph", text: "A variety of sustained competitive advantage factors could be considered. Examples could include:" },
      { type: "list", items: ["Cheaper inputs", "Increased volume", "Improved cost leadership", "Improved good/service differentiation", "Economies of scale", "Improved technology", "Increased quality, speed, dependability, flexibility, customisation", "Increased profitability."] },
    ] },

// ─── 2023 Section I ───────────────────────────────────────────────────────────

  { id: "23m1", topic: "human_resources", type: "mcq", marks: 1, src: "2023 HSC, Section I, Q1",
    stem: "Businesses offer employees rewards in order to",
    options: ["prevent the possibility of industrial action.", "recognise the value of their effort to the business.", "fulfil federal government legislation requirements.", "provide employees with an income to meet the costs of living."],
    answer: 1, explain: "The primary purpose of rewards in HRM is to recognise and incentivise employee contribution, motivating performance and building satisfaction." },

  { id: "23m2", topic: "operations", type: "mcq", marks: 1, src: "2023 HSC, Section I, Q2",
    stem: "A florist designs floral displays for weddings to suit the colour preferences of individual couples. Which of the following would be the main performance objective being targeted by this florist?",
    options: ["Customisation", "Flexibility", "Quality", "Speed"],
    answer: 0, explain: "Customisation means tailoring products to individual specifications. Designing to each couple's colour preferences is customisation. Flexibility refers to adapting to volume changes, not individual tailoring." },

  { id: "23m3", topic: "marketing", type: "mcq", marks: 1, src: "2023 HSC, Section I, Q3",
    stem: "Which of the following best illustrates relationship marketing?",
    options: ["Creating long-term customer loyalty", "Distributing goods directly to customers", "Using promotions to increase customer sales", "Basing the marketing mix on customer feedback"],
    answer: 0, explain: "Relationship marketing focuses on building ongoing loyal customer relationships rather than one-off transactions. Creating long-term loyalty is its defining outcome." },

  { id: "23m4", topic: "human_resources", type: "mcq", marks: 1, src: "2023 HSC, Section I, Q4",
    stem: "An employee receives an electrical burn while working. The employee requires hospital treatment and is unable to return to work for three months. As a result of this injury, what support is this employee entitled to?",
    options: ["Mediation", "Payment in advance", "Workers compensation", "Training and development"],
    answer: 2, explain: "Workers compensation provides wage replacement and medical costs for employees injured at work, a legal entitlement under WH&S legislation." },

  { id: "23m5", topic: "marketing", type: "mcq", marks: 1, src: "2023 HSC, Section I, Q5",
    stem: "A business wants to quickly achieve a large market share for a product. Which marketing strategy would most likely be used?",
    options: ["Branding", "Skimming", "Penetration", "Price points"],
    answer: 2, explain: "Price penetration uses a low entry price to rapidly capture market share by attracting price-sensitive customers. Skimming targets early adopters with a high price, growing share slowly." },

  { id: "23m6", topic: "human_resources", type: "mcq", marks: 1, src: "2023 HSC, Section I, Q6",
    stem: "A mattress manufacturer reduced the working hours of its factory workers due to a decrease in demand. Which influence on human resources is most likely to have led to this?",
    options: ["Economic", "Legal", "Operations", "Social"],
    answer: 0, explain: "A decrease in demand is an economic influence, the economic cycle affects business output and therefore staffing needs directly." },

  { id: "23m7", topic: "marketing", type: "mcq", marks: 1, src: "2023 HSC, Section I, Q7",
    stem: "Which of the following shows the correct order of the steps in a marketing plan?",
    options: ["Market research, establishing market objectives, identifying target markets, situational analysis", "Establishing market objectives, identifying target markets, situational analysis, market research", "Identifying target markets, situational analysis, market research, establishing market objectives", "Situational analysis, market research, establishing market objectives, identifying target markets"],
    answer: 3, explain: "The correct marketing planning order: (1) situational analysis (SWOT), (2) market research, (3) establish objectives, (4) identify target markets. The process begins with understanding the current situation." },

  { id: "23m8", topic: "finance", type: "mcq", marks: 1, src: "2023 HSC, Section I, Q8",
    stem: "An export company based in Sydney sells Australian-made art to the Asian market. Which form of payment has the lowest level of risk for the exporter?",
    options: ["Clean payment", "Letter of credit", "Bill of exchange", "Payment in advance"],
    answer: 3, explain: "Payment in advance means the buyer pays before receiving goods, the exporter receives funds before shipping, eliminating non-payment risk. Clean payment (open account) carries the highest exporter risk." },

  { id: "23m9", topic: "operations", type: "mcq", marks: 1, src: "2023 HSC, Section I, Q9",
    stem: "The training of staff in the manufacturing process is an example of interdependence between which of the following business functions?",
    options: ["Finance and marketing", "Marketing and operations", "Finance and human resources", "Operations and human resources"],
    answer: 3, explain: "Training staff in manufacturing processes involves operations (the process to be learned) and human resources (who manages training and development programs)." },

  { id: "23m10", topic: "marketing", type: "mcq", marks: 1, src: "2023 HSC, Section I, Q10",
    stem: "An energy drink business uses a celebrity to promote its products online. Which marketing strategy is being used?",
    options: ["Loss leaders", "Opinion leaders", "Personal selling", "Sales promotion"],
    answer: 1, explain: "Using a celebrity to promote products is opinion leader marketing, leveraging the celebrity's influence and credibility with their audience." },

  { id: "23m11", topic: "human_resources", type: "mcq", marks: 1, src: "2023 HSC, Section I, Q11",
    stem: "Which of the following is involved in making workplace agreements and resolving workplace disputes?",
    options: ["Fair Work Commission", "Australian Human Rights Commission", "Australian Securities and Investments Commission", "Australian Competition and Consumer Commission"],
    answer: 0, explain: "The Fair Work Commission is Australia's national workplace tribunal that approves enterprise agreements and resolves disputes. AHRC handles human rights/discrimination; ASIC regulates financial services." },

  { id: "23m12", topic: "finance", type: "mcq", marks: 1, src: "2023 HSC, Section I, Q12",
    stem: "An Australian theme park wants to implement a new point-of-sale system that allows improved tracking of stock levels. The system will cost $185 000 to establish. Which long-term source of finance would be most appropriate for this system?",
    options: ["Derivatives", "Hedging", "Leasing", "Overdraft"],
    answer: 2, explain: "Leasing allows the business to use the equipment without a large upfront capital outlay. Derivatives and hedging are risk management tools, not sources of finance. An overdraft is short-term and unsuitable for $185 000 capital investment." },

  { id: "23m13", topic: "marketing", type: "mcq", marks: 1, src: "2023 HSC, Section I, Q13",
    stem: "A customer returns a recently purchased 5G mobile phone to the place of purchase as the phone was faulty. Under consumer law, why must the business refund the customer the cost of the mobile phone?",
    options: ["It is ethical to replace defective goods.", "It is within the implied conditions of the contract.", "It is important to meet corporate social responsibility.", "It can be considered deceptive and misleading advertising."],
    answer: 1, explain: "Consumer law implies that goods must be of acceptable quality. A faulty phone breaches this implied condition, entitling the buyer to a remedy, a legal obligation, not merely ethical." },

  { id: "23m14", topic: "finance", type: "mcq", marks: 1, src: "2023 HSC, Section I, Q14",
    stem: "The Australian dollar increases from 0.50 to 0.70 USD.\n\nWhat impact would this have on the goods imported to Australia and the goods exported to the United States?",
    stimulus: [{ type: "table", headers: ["", "Imports", "Exports"], rows: [["A.", "More expensive", "More expensive"], ["B.", "Less expensive", "More expensive"], ["C.", "Less expensive", "Less expensive"], ["D.", "More expensive", "Less expensive"]] }],
    options: ["More expensive / More expensive", "Less expensive / More expensive", "Less expensive / Less expensive", "More expensive / Less expensive"],
    answer: 1, explain: "A stronger AUD makes imports cheaper (more AUD buys more foreign goods) but makes exports more expensive for US buyers (they need more USD to buy AUD-priced goods)." },

  { id: "23m15", topic: "operations", type: "mcq", marks: 1, src: "2023 HSC, Section I, Q15",
    stem: "A large construction company has decided to focus their operations on design and innovation. Which of the following best describes this operations management strategy?",
    options: ["Outsourcing", "Cost leadership", "Supply chain development", "Goods/services differentiation"],
    answer: 3, explain: "Focusing on design and innovation to create unique output is goods/services differentiation, competing by being distinctive rather than cheapest." },

  { id: "23m16", topic: "finance", type: "mcq", marks: 1, src: "2023 HSC, Section I, Q16",
    stem: "The table shows extracts from the financial statements of a business for 2022.\n\nWhat is the net profit ratio for this business in 2022? (Net profit ratio = net profit ÷ sales)",
    stimulus: [{ type: "table", headers: ["", "2022\n($)"], rows: [["Sales", "300 000"], ["Cost of goods sold", "200 000"], ["Gross profit", "100 000"], ["Expenses", "40 000"]] }],
    options: ["13%", "20%", "53%", "150%"],
    answer: 1, explain: "Net profit = GP – Expenses = $100,000 – $40,000 = $60,000. Net profit ratio = $60,000 ÷ $300,000 = 20%." },

  { id: "23m17", topic: "operations", type: "mcq", marks: 1, src: "2023 HSC, Section I, Q17",
    stem: "Refer to the following diagram to answer Questions 17–18.\n\nA critical path analysis is shown for a job.\n\nWhich tasks could be occurring at the same time?",
    stimulus: [{
      type: "networkDiagram",
      nodes: [
        { id: "A", x: 90, y: 160 },
        { id: "B", x: 260, y: 160 },
        { id: "C", x: 430, y: 160 },
        { id: "D", x: 560, y: 160 },
        { id: "E", x: 345, y: 70, labelX: 330, labelY: 64 },
        { id: "F", x: 345, y: 250, labelX: 330, labelY: 272 },
      ],
      edges: [
        { from: "A", to: "B", label: "6 days", labelX: 175, labelY: 148 },
        { from: "B", to: "C", label: "3 days", labelX: 345, labelY: 148 },
        { from: "C", to: "D", label: "3 days", labelX: 495, labelY: 148 },
        { from: "B", to: "E", label: "5 days", labelX: 298, labelY: 112 },
        { from: "E", to: "C", label: "3 days", labelX: 392, labelY: 112 },
        { from: "B", to: "F", label: "7 days", labelX: 300, labelY: 222 },
        { from: "F", to: "C", label: "6 days", labelX: 392, labelY: 222 },
      ],
    }],
    options: ["AB, BC and CD", "AB, BF and FC", "BE, BF and BC", "BE, BF and EC"],
    answer: 2, explain: "After task AB is complete, tasks BE, BF, and BC can all start simultaneously from node B, they all only require A→B to be finished, with no dependency on each other." },

  { id: "23m18", topic: "operations", type: "mcq", marks: 1, src: "2023 HSC, Section I, Q18",
    stem: "Task EC is delayed and takes an additional 7 days. By how many days will the length of the critical path change?",
    stimulus: [{
      type: "networkDiagram",
      nodes: [
        { id: "A", x: 90, y: 160 },
        { id: "B", x: 260, y: 160 },
        { id: "C", x: 430, y: 160 },
        { id: "D", x: 560, y: 160 },
        { id: "E", x: 345, y: 70, labelX: 330, labelY: 64 },
        { id: "F", x: 345, y: 250, labelX: 330, labelY: 272 },
      ],
      edges: [
        { from: "A", to: "B", label: "6 days", labelX: 175, labelY: 148 },
        { from: "B", to: "C", label: "3 days", labelX: 345, labelY: 148 },
        { from: "C", to: "D", label: "3 days", labelX: 495, labelY: 148 },
        { from: "B", to: "E", label: "5 days", labelX: 298, labelY: 112 },
        { from: "E", to: "C", label: "3 days", labelX: 392, labelY: 112 },
        { from: "B", to: "F", label: "7 days", labelX: 300, labelY: 222 },
        { from: "F", to: "C", label: "6 days", labelX: 392, labelY: 222 },
      ],
    }],
    options: ["0 days", "2 days", "4 days", "6 days"],
    answer: 1, explain: "Original critical path AB+BF+FC+CD = 6+7+6+3 = 22 days. With EC delayed by 7: path AB+BE+EC+CD = 6+5+10+3 = 24 days. New critical path = 24 days. Change = 2 days." },

  { id: "23m19", topic: "human_resources", type: "mcq", marks: 1, src: "2023 HSC, Section I, Q19",
    stem: "Which of the following stakeholders has the power to implement workplace reforms to support employees of various abilities, ages and genders?",
    options: ["Unions", "Society", "Employer associations", "Government organisations"],
    answer: 3, explain: "Government organisations legislate workplace reform, equal employment opportunity, anti-discrimination, and accessibility laws are passed and enforced by government." },

  { id: "23m20", topic: "finance", type: "mcq", marks: 1, src: "2023 HSC, Section I, Q20",
    stem: "The following is an extract from a business balance sheet.\n\nWhich strategy would be most effective in improving the current ratio for this business? (Current ratio = current assets ÷ current liabilities)",
    stimulus: [
      {
        type: "table",
        headers: ["Assets", "($)", "Liabilities", "($)"],
        rows: [
          ["Cash", "6 500", "Accounts payable", "18 500"],
          ["Accounts receivable", "12 500", "Overdraft", "3 500"],
          ["Inventory", "40 000", "Short-term bank loan", "21 400"],
          ["Furniture and fittings", "16 000", "Mortgage", "13 000"],
          ["Plant machinery", "12 500", "Capital", "45 000"],
          ["Office equipment", "5 000", "Net profit", "134 100"],
          ["Buildings", "360 000", "", ""],
          ["Total assets", "452 500", "Total liabilities", "235 500"],
          ["", "", "Owner's equity", "217 000"],
        ],
      },
      { type: "note", text: "The official marking guideline accepts A and D and notes that this question is not suitable for exam preparation." },
    ],
    options: ["Sell excess machinery and equipment", "Borrow money on a short-term bank loan", "Take on a new mortgage to purchase buildings", "Offer a discount to customers for early payment"],
    answer: [0, 3], explain: "The official marking guideline accepts A and D for this question, with the note that this question is not suitable for exam preparation." },

// ─── 2023 Section II ──────────────────────────────────────────────────────────

  { id: "23s21a", topic: "operations", type: "short", marks: 2, src: "2023 HSC, Section II, Q21(a)",
    stem: "An Australian tyre manufacturer is expanding its business. In order to reduce operating costs and increase sales and profit, rubber will be sourced from the global market. The business wants to maintain quality outputs and achieve economies of scale. Outline ONE potential issue this business could face in relation to both cost and quality of outputs.",
    criteria: ["Outlines a potential issue this business could face in relation to both cost and quality of outputs", "Provides some relevant information"],
    criteriaBands: [
      { marks: "2", criteria: ["Outlines a potential issue this business could face in relation to both cost and quality of outputs"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "The business can reduce the costs of inputs when they source globally, cheaper inputs such as rubber, may result in lower quality tyres." },

  { id: "23s21b", topic: "operations", type: "short", marks: 3, src: "2023 HSC, Section II, Q21(b)",
    stem: "An Australian tyre manufacturer wants to achieve economies of scale through global rubber sourcing. Explain the benefits of achieving economies of scale for both the business and consumers.",
    criteria: ["Explains the benefits of achieving economies of scale for both the business and consumers", "Describes the benefit(s) of achieving economies of scale for the business and/or consumers", "Provides some relevant information"],
    criteriaBands: [
      { marks: "3", criteria: ["Explains the benefits of achieving economies of scale for both the business and consumers"] },
      { marks: "2", criteria: ["Describes the benefit(s) of achieving economies of scale for the business and/or consumers"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "Economies of scale will provide this business with cost advantages by increasing the volume of its production, allowing the business to lower the price of the finished product. Consumers will benefit from the reduced price and the business will then increase sales and profits in the long term." },

  { id: "23s21c", topic: "operations", type: "short", marks: 5, src: "2023 HSC, Section II, Q21(c)",
    stem: "The owners of the tyre manufacturing business have purchased leading-edge technology to help achieve economies of scale. Explain why both staff and management might be resistant to this change.",
    criteria: ["Provides a thorough explanation of why staff and management in this business might be resistant to this change", "Provides a sound explanation of why staff and management in this business might be resistant to this change", "Demonstrates some understanding of why staff and/or management in this business might be resistant to this change", "Identifies why staff and/or management in this business might be resistant to this change", "Provides some relevant information"],
    criteriaBands: [
      { marks: "5", criteria: ["Provides a thorough explanation of why staff and management in this business might be resistant to this change"] },
      { marks: "4", criteria: ["Provides a sound explanation of why staff and management in this business might be resistant to this change"] },
      { marks: "3", criteria: ["Demonstrates some understanding of why staff and/or management in this business might be resistant to this change"] },
      { marks: "2", criteria: ["Identifies why staff and/or management in this business might be resistant to this change"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "The leading-edge technology purchased would be costly for management. The new technology may also require staff and management to be retrained. This can be expensive for management and staff may be resistant to learning new techniques due to fear or inertia. Fear of job loss may cause resistance to change as staff may feel that processes may become automated and their jobs may become redundant. This also imposes extra costs to the business." },

  { id: "23s22a", topic: "human_resources", type: "short", marks: 2, src: "2023 HSC, Section II, Q22(a)",
    stem: "What is the purpose of Equal Employment Opportunity (EEO) legislation?",
    criteria: ["Provides the purpose of Equal Employment Opportunity (EEO) legislation", "Provides some relevant information"],
    criteriaBands: [
      { marks: "2", criteria: ["Provides the purpose of Equal Employment Opportunity (EEO) legislation"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "It ensures that the best qualified person for the job gets the position and that employers don't hire or reject candidates based on factors such as culture, ethnicity, gender, age etc." },

  { id: "23s22b", topic: "human_resources", type: "short", marks: 3, src: "2023 HSC, Section II, Q22(b)",
    stem: "The advertisement for a store manager is shown.\n\nOutline TWO human resource issues found in this advertisement.",
    stimulus: [
      { type: "heading", text: "Teddy Bear Store" },
      { type: "paragraph", text: "Est. 1990" },
      { type: "paragraph", text: "Teddy Bear Store aims to bring joy to children." },
      { type: "paragraph", text: "We are looking for a Store Manager. If you are interested, please contact us." },
      { type: "table", headers: ["Role:", "Responsibilities:", "General information:"], rows: [["Manage a team of 8 staff members\n\nManage day-to-day operations", "Organise inventory\n\nTrain staff\n\nAssist customers", "$65 000 salary\n\nUnion membership not permitted\n\nNo superannuation included"]] },
    ],
    criteria: ["Outlines TWO human resource issues found in the advertisement", "Outlines an issue found in the advertisement", "Provides some relevant information"],
    criteriaBands: [
      { marks: "3", criteria: ["Outlines TWO human resource issues found in the advertisement"] },
      { marks: "2", criteria: ["Outlines an issue found in the advertisement"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "Superannuation is a legal requirement that all employees are entitled to under Minimum Standards. Under the Fair Work Act (2009) it is illegal to prohibit union membership in Australia. This business has breached these two requirements in their advertisement." },

  { id: "23s22c", topic: "human_resources", type: "short", marks: 5, src: "2023 HSC, Section II, Q22(c)",
    stem: "The table shows labour force participation rates for males and females in Australia, 1981–2021.\n\nExplain the social influences that have contributed to the changing labour force participation rates in the period 1981–2021.",
    stimulus: [{ type: "table", headers: ["Year", "Males", "Females"], rows: [["1981", "78%", "44%"], ["2001", "73%", "55%"], ["2021", "71%", "62%"]] }],
    criteria: ["Provides a thorough explanation of the social influences that have contributed to the changing labour force participation rates over the 40 years", "Provides a sound explanation of the social influences that have contributed to the changing labour force participation rates over the 40 years", "Demonstrates some understanding of the social influences that have contributed to the changing labour force participation rates over the 40 years", "Demonstrates some understanding of labour force participation and/or social influences", "Provides some relevant information"],
    criteriaBands: [
      { marks: "5", criteria: ["Provides a thorough explanation of the social influences that have contributed to the changing labour force participation rates over the 40 years"] },
      { marks: "4", criteria: ["Provides a sound explanation of the social influences that have contributed to the changing labour force participation rates over the 40 years"] },
      { marks: "3", criteria: ["Demonstrates some understanding of the social influences that have contributed to the changing labour force participation rates over the 40 years"] },
      { marks: "2", criteria: ["Demonstrates some understanding of labour force participation and/or social influences"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "As shown in the table, the labour participation rate for females has significantly increased from 44% in 1981 to 62% in 2021 compared to the participation rate for males which has decreased from 78% in 1981 to 71% in 2021. This is due to a number of reasons such as changing gender roles, eg changes in society which supports the increasing participation of women in the workforce and an increase in the acceptance/participation of males in child-rearing duties. This change in social norms has also normalised the completion of higher education for females which has subsequently led to increased employment opportunities.",
    sampleBlocks: [{ type: "heading", text: "Answers could include:" }, { type: "list", items: ["Childcare opportunities", "Changes in government policy", "Workplace flexibility", "Postponement of retirement due to high cost of living."] }] },

  { id: "23s23a", topic: "marketing", type: "short", marks: 2, src: "2023 HSC, Section II, Q23(a)",
    stem: "A cereal manufacturer has decided to change the packaging of its product in an attempt to reverse a drop in sales and remain competitive with existing businesses. It is also considering growing its target market by catering for health-conscious consumers in Australia and eventually expanding into the global market. Outline the current product life cycle stage of this cereal.",
    criteria: ["Outlines the current product life cycle stage", "Provides some relevant information"],
    criteriaBands: [
      { marks: "2", criteria: ["Outlines the current product life cycle stage"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "The cereal manufacturer is in the decline stage of the product life cycle. This is the result of dropping sales and the manufacturer is hoping to renew consumer interest by changing the packaging of its product.",
    sampleBlocks: [{ type: "heading", text: "Answers could include:" }, { type: "list", items: ["Post-maturity"] }] },

  { id: "23s23b", topic: "marketing", type: "short", marks: 3, src: "2023 HSC, Section II, Q23(b)",
    stem: "A cereal manufacturer in decline is considering catering for health-conscious consumers in Australia and eventually expanding into the global market. How could a niche market approach increase sales for this cereal manufacturer?",
    criteria: ["Demonstrates a clear understanding of how the niche market approach could increase sales for this manufacturer", "Demonstrates features of a niche market and/or how this approach could increase sales for the manufacturer", "Provides some relevant information"],
    criteriaBands: [
      { marks: "3", criteria: ["Demonstrates a clear understanding of how the niche market approach could increase sales for this manufacturer"] },
      { marks: "2", criteria: ["Demonstrates features of a niche market and/or how this approach could increase sales for the manufacturer"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "A niche market approach would allow the manufacturer to meet the needs of health-conscious customers by offering them a healthy range of cereals such as low sugar or sugar-free cereals. This targeted approach would allow the manufacturer to increase their sales by differentiating their product against competitors, achieve repeat sales and create customer loyalty." },

  { id: "23s23c", topic: "marketing", type: "short", marks: 5, src: "2023 HSC, Section II, Q23(c)",
    stem: "A cereal manufacturer is considering expanding into the global market, targeting health-conscious consumers. Justify ONE global marketing strategy this cereal manufacturer could use to expand into the global market.",
    criteria: ["Provides comprehensive support for the use of ONE global marketing strategy to expand into this global market", "Provides sound support for the use of ONE global marketing strategy to expand into this global market", "Demonstrates some understanding of the use of ONE global marketing strategy with some reference to this global market", "Demonstrates some understanding of global marketing strategy", "Provides some relevant information"],
    criteriaBands: [
      { marks: "5", criteria: ["Provides comprehensive support for the use of ONE global marketing strategy to expand into this global market"] },
      { marks: "4", criteria: ["Provides sound support for the use of ONE global marketing strategy to expand into this global market"] },
      { marks: "3", criteria: ["Demonstrates some understanding of the use of ONE global marketing strategy with some reference to this global market"] },
      { marks: "2", criteria: ["Demonstrates some understanding of global marketing strategy"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "Customisation is a global marketing strategy whereby a business tailors the marketing mix for a product sold around the world to individual markets. Customisation of packaging by changing the language used on the cereal box also allows a wider range of consumers globally to understand the features of the cereal that they are eating. Customisation is therefore recommended for this cereal manufacturer for its global expansion to allow it to be more profitable in the long term by meeting the wants and needs of customers in unique global markets.",
    sampleBlocks: [{ type: "heading", text: "Answer could include:" }, { type: "list", items: ["Standardisation", "Global branding", "Competitive positioning", "Global pricing."] }] },

  { id: "23s24a", topic: "finance", type: "short", marks: 2, src: "2023 HSC, Section II, Q24(a)",
    stem: "What is the purpose of a cash flow statement?",
    criteria: ["Provides the purpose of a cash flow statement", "Provides some relevant information"],
    criteriaBands: [
      { marks: "2", criteria: ["Provides the purpose of a cash flow statement"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "The purpose of a cash flow statement is to identify the inflows and outflows of cash over a period of time." },

  { id: "23s24b", topic: "finance", type: "short", marks: 3, src: "2023 HSC, Section II, Q24(b)",
    stem: "Explain a possible conflict between ONE short-term and ONE long-term financial objective.",
    criteria: ["Explains a conflict between one short-term and one long-term financial objective", "Outlines a conflict between one short-term and one long-term financial objective", "Provides some relevant information"],
    criteriaBands: [
      { marks: "3", criteria: ["Explains a conflict between one short-term and one long-term financial objective"] },
      { marks: "2", criteria: ["Outlines a conflict between one short-term and one long-term financial objective"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "There may be a conflict between the short-term financial objective of profitability and the long-term objective of growth. A business entering new markets will require new equipment and more staff. Consequently, this business could initially suffer a short-term financial loss but it may succeed in being more profitable in the long term.",
    sampleBlocks: [{ type: "heading", text: "Answers could include:" }, { type: "list", items: ["Profitability", "Growth", "Efficiency", "Liquidity", "Solvency."] }] },

  { id: "23s24c", topic: "finance", type: "short", marks: 5, src: "2023 HSC, Section II, Q24(c)",
    stem: "Explain TWO limitations of financial reports.",
    criteria: ["Provides a detailed explanation of TWO limitations of financial reports", "Provides a sound explanation of TWO limitations of financial reports", "Demonstrates some limitations of financial reports", "Demonstrates some understanding of limitation(s) of financial reports", "Provides some relevant information"],
    criteriaBands: [
      { marks: "5", criteria: ["Provides a detailed explanation of TWO limitations of financial reports"] },
      { marks: "4", criteria: ["Provides a sound explanation of TWO limitations of financial reports"] },
      { marks: "3", criteria: ["Demonstrates some limitations of financial reports"] },
      { marks: "2", criteria: ["Demonstrates some understanding of limitation(s) of financial reports"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "Valuing assets is the process of estimating how much assets are worth. It is problematic to value assets in a financial report as their value changes over time and the process is subjective. For example, land values tend to increase in value therefore, the balance sheet understates the net value of the business. Capitalising expenses involves the business recording an expense as an asset on the balance sheet rather than an expense in the income statement. This would appear as a higher net income for the business, misleading potential investors.",
    sampleBlocks: [{ type: "heading", text: "Answers could include:" }, { type: "list", items: ["Normalised earnings", "Capitalising expenses", "Valuing assets", "Timing issues", "Debt repayments", "Notes to the financial statements."] }] },

// ─── 2023 Section III/IV ──────────────────────────────────────────────────────

  { id: "23e25", topic: "human_resources", topics: ["human_resources", "finance"], type: "extended", marks: 20, src: "2023 HSC, Section III, Q25",
    stem: "The directors have asked you to write a business report in which you:\n• outline some of the challenges including the global factors of costs, skills and supply the business may need to consider in recruiting and retaining staff\n• compare the use of debt and equity as sources of finance\n• recommend ONE source of finance this business could use to fund its expansion.",
    stimulus: [
      { type: "paragraph", text: "Future Century Gaming Pty Ltd operates an online gaming platform targeting players aged 18–40 in Australia. It has been in operation since 2012, providing subscription access to a variety of online games." },
      { type: "paragraph", text: "The business is considering expanding into emerging global markets but is finding it challenging to recruit and retain skilled, qualified game designers and developers in Australia. It is considering international labour markets to overcome staff shortages." },
      { type: "paragraph", text: "The business has decided to finance its expansion into global markets through external sources." },
    ],
    criteria: ["Provides a comprehensive outline of the challenges including the global factors of costs, skills and supply in relation to recruiting and retaining staff", "Provides a comprehensive comparison of the use of debt and equity finance", "Provides a comprehensive recommendation to the business for ONE source of finance to fund the expansion", "Makes effective use of the information provided, demonstrating extensive knowledge and understanding relevant to the question", "Presents a sustained, logical and cohesive business report integrating relevant business terminology and concepts", "Provides a substantial outline of the global factors of costs, skill and supply in relation to recruiting and/or retaining staff", "Provides a clear comparison of the use of debt and equity finance", "Provides a sound recommendation to the business for ONE source of finance to fund the expansion", "Makes sound use of the information provided, demonstrating knowledge and understanding relevant to the question", "Presents a logical and cohesive business report integrating relevant business terminology and concepts", "Provides a sound outline of the global factors of costs and/or skills and/or supply in relation to recruiting and/or retaining staff", "Provides a sound comparison of debt and equity finance", "Provides a recommendation to the business for ONE source of finance to fund the expansion", "Makes use of the information provided, demonstrating some knowledge and understanding relevant to the question", "Includes features of a business report and uses some business terminology and concepts", "Provides some outline of global costs and/or skills and/or supply", "Makes a statement about debt and/or equity finance", "Makes a statement about a possible source of finance", "Includes some features of a business report and uses some basic business terminology and/or concepts", "Makes some reference to human resource strategies and/or finance", "Uses basic business terminology"],
    criteriaBands: [
      { marks: "17–20", criteria: ["Provides a comprehensive outline of the challenges including the global factors of costs, skills and supply in relation to recruiting and retaining staff", "Provides a comprehensive comparison of the use of debt and equity finance", "Provides a comprehensive recommendation to the business for ONE source of finance to fund the expansion", "Makes effective use of the information provided, demonstrating extensive knowledge and understanding relevant to the question", "Presents a sustained, logical and cohesive business report integrating relevant business terminology and concepts"] },
      { marks: "13–16", criteria: ["Provides a substantial outline of the global factors of costs, skill and supply in relation to recruiting and/or retaining staff", "Provides a clear comparison of the use of debt and equity finance", "Provides a sound recommendation to the business for ONE source of finance to fund the expansion", "Makes sound use of the information provided, demonstrating knowledge and understanding relevant to the question", "Presents a logical and cohesive business report integrating relevant business terminology and concepts"] },
      { marks: "9–12", criteria: ["Provides a sound outline of the global factors of costs and/or skills and/or supply in relation to recruiting and/or retaining staff", "Provides a sound comparison of debt and equity finance", "Provides a recommendation to the business for ONE source of finance to fund the expansion", "Makes use of the information provided, demonstrating some knowledge and understanding relevant to the question", "Includes features of a business report and uses some business terminology and concepts"] },
      { marks: "5–8", criteria: ["Provides some outline of global costs and/or skills and/or supply", "Makes a statement about debt and/or equity finance", "Makes a statement about a possible source of finance", "Includes some features of a business report and uses some basic business terminology and/or concepts"] },
      { marks: "1–4", criteria: ["Makes some reference to human resource strategies and/or finance", "Uses basic business terminology"] },
    ],
    sample: "",
    sampleBlocks: [
      { type: "heading", text: "Answers could include:" },
      { type: "heading", text: "Strategies in human resource management" },
      { type: "list", items: ["Global – costs, skills, supply"] },
      { type: "heading", text: "Debt and equity finance" },
      { type: "list", items: ["Advantages and disadvantages of each"] },
      { type: "heading", text: "Influences on financial management" },
      { type: "list", items: ["Internal sources of finance – retained profits", "External sources of finance – debt", "Short-term borrowing (overdraft, commercial bills, factoring), long-term borrowing (mortgage, debentures, unsecured notes, leasing)", "External sources of finance – equity", "Shares (new issues, rights issues, placements, share purchase plans), private equity."] },
    ] },

  { id: "23e26", topic: "marketing", type: "extended", marks: 20, src: "2023 HSC, Section IV, Q26",
    stem: "To what extent do influences on marketing affect business success?",
    criteria: ["Makes a detailed and informed judgement of the extent to which influences on marketing affect business success", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts", "Makes a clear judgement of the extent to which influences on marketing affect business success", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts", "Makes some judgement of the extent to which influences on marketing affect business success", "Makes reference to case study/studies and contemporary business issues", "Communicates using business terminology and concepts", "Makes statements or generalised comment(s) about influences on marketing and/or business success", "Makes limited reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and/or concepts", "Makes limited reference to marketing", "May identify case study/studies", "Uses basic business terminology and/or concepts"],
    criteriaBands: [
      { marks: "17–20", criteria: ["Makes a detailed and informed judgement of the extent to which influences on marketing affect business success", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts"] },
      { marks: "13–16", criteria: ["Makes a clear judgement of the extent to which influences on marketing affect business success", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts"] },
      { marks: "9–12", criteria: ["Makes some judgement of the extent to which influences on marketing affect business success", "Makes reference to case study/studies and contemporary business issues", "Communicates using business terminology and concepts"] },
      { marks: "5–8", criteria: ["Makes statements or generalised comment(s) about influences on marketing and/or business success", "Makes limited reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and/or concepts"] },
      { marks: "1–4", criteria: ["Makes limited reference to marketing", "May identify case study/studies", "Uses basic business terminology and/or concepts"] },
    ],
    sample: "",
    sampleBlocks: [
      { type: "heading", text: "Answers could include:" },
      { type: "heading", text: "Influences on marketing" },
      { type: "list", items: ["Factors influencing customer choice – psychological, sociocultural, economic, government", "Consumer laws – deceptive and misleading advertising, price discrimination, implied conditions, warranties", "Ethical – truth, accuracy in good taste in advertising, products that may damage health, engaging in fair competition, sugging."] },
    ] },

  { id: "23e27", topic: "operations", type: "extended", marks: 20, src: "2023 HSC, Section IV, Q27",
    stem: "To what extent do influences on operations affect business success?",
    criteria: ["Makes a detailed and informed judgement of the extent to which influences on operations affect business success", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts", "Makes a clear judgement of the extent to which influences on operations affect business success", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts", "Makes some judgement of the extent to which influences on operations affect business success", "Makes reference to case study/studies and contemporary business issues", "Communicates using business terminology and concepts", "Makes statements or generalised comment(s) about influences on operations and/or business success", "Makes limited reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and/or concepts", "Makes limited reference to operations", "May identify case study/studies", "Uses basic business terminology and/or concepts"],
    criteriaBands: [
      { marks: "17–20", criteria: ["Makes a detailed and informed judgement of the extent to which influences on operations affect business success", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts"] },
      { marks: "13–16", criteria: ["Makes a clear judgement of the extent to which influences on operations affect business success", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts"] },
      { marks: "9–12", criteria: ["Makes some judgement of the extent to which influences on operations affect business success", "Makes reference to case study/studies and contemporary business issues", "Communicates using business terminology and concepts"] },
      { marks: "5–8", criteria: ["Makes statements or generalised comment(s) about influences on operations and/or business success", "Makes limited reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and/or concepts"] },
      { marks: "1–4", criteria: ["Makes limited reference to operations", "May identify case study/studies", "Uses basic business terminology and/or concepts"] },
    ],
    sample: "",
    sampleBlocks: [
      { type: "heading", text: "Answers could include:" },
      { type: "heading", text: "Influences on operations" },
      { type: "list", items: ["Globalisation, technology, quality expectations, cost-based competition, government policies, legal regulation, environmental sustainability"] },
      { type: "heading", text: "Corporate social responsibility" },
      { type: "list", items: ["The difference between legal compliance and ethical responsibility", "Environmental sustainability and social responsibility."] },
    ] },

// ─── 2024 Section I ───────────────────────────────────────────────────────────

  { id: "24m1", topic: "human_resources", type: "mcq", marks: 1, src: "2024 HSC, Section I, Q1",
    stem: "Who is most likely to represent employees for an increase in wages?",
    options: ["A trade union", "Fair Work Australia", "An employer association", "Federal Court of Australia"],
    answer: 0, explain: "A trade union represents employees in wage negotiations. Fair Work Australia (Fair Work Commission) and the Federal Court are dispute-resolution bodies; an employer association represents employers." },

  { id: "24m2", topic: "operations", type: "mcq", marks: 1, src: "2024 HSC, Section I, Q2",
    stem: "The banning of dangerous goods such as asbestos is due to",
    options: ["global sourcing.", "business policies.", "legal regulations.", "operational regulations."],
    answer: 2, explain: "Banning of dangerous goods such as asbestos is enforced through legal regulations (government legislation). Business policies are internal; global sourcing and operational regulations are not the mechanism for such bans." },

  { id: "24m3", topic: "human_resources", type: "mcq", marks: 1, src: "2024 HSC, Section I, Q3",
    stem: "At which stage of the human resource process would a performance appraisal of an employee be conducted?",
    options: ["Acquisition", "Development", "Induction", "Separation"],
    answer: 1, explain: "Performance appraisals are conducted during the Development stage, they identify training needs and measure employee progress. Acquisition is recruitment/selection; induction is onboarding; separation is exit." },

  { id: "24m4", topic: "marketing", type: "mcq", marks: 1, src: "2024 HSC, Section I, Q4",
    stem: "A retailer sells a new style of sunglasses at a significantly higher price for the first month they are sold. What pricing strategy is being used by the retailer?",
    options: ["Price skimming", "Price penetration", "Price discrimination", "Price and quality interaction"],
    answer: 0, explain: "Price skimming sets a high initial price to capture less price-sensitive early customers, then reduces it over time. Penetration pricing is the reverse, entering low to gain market share." },

  { id: "24m5", topic: "human_resources", type: "mcq", marks: 1, src: "2024 HSC, Section I, Q5",
    stem: "Which row of the table shows the results of effective human resource management?",
    stimulus: [{ type: "table", headers: ["", "Workplace accidents", "Absenteeism"], rows: [["A.", "Increase", "Decrease"], ["B.", "Increase", "Increase"], ["C.", "Decrease", "Decrease"], ["D.", "Decrease", "Increase"]] }],
    options: ["Workplace accidents increase; absenteeism decrease", "Workplace accidents increase; absenteeism increase", "Workplace accidents decrease; absenteeism decrease", "Workplace accidents decrease; absenteeism increase"],
    answer: 2, explain: "Effective HRM reduces workplace accidents (through WH&S training) and reduces absenteeism (through motivation, fair treatment, and good working conditions). Both decrease." },

  { id: "24m6", topic: "operations", type: "mcq", marks: 1, src: "2024 HSC, Section I, Q6",
    stem: "A government is providing businesses with a tax benefit if they source their electricity through renewable energy sources. The most likely reason for offering this tax benefit is to",
    options: ["minimise government debt.", "minimise government utility costs.", "encourage competition between businesses.", "encourage businesses to be more environmentally sustainable."],
    answer: 3, explain: "A government renewable energy tax incentive is designed to encourage businesses to adopt sustainable practices, an environmental policy objective, not primarily a fiscal or competitive one." },

  { id: "24m7", topic: "operations", type: "mcq", marks: 1, src: "2024 HSC, Section I, Q7",
    stem: "An employee has badly injured their shoulder at work and is seeing a physiotherapist for treatment. The treatment that the physiotherapist provides can be described as a",
    options: ["customised good.", "standardised good.", "customised service.", "standardised service."],
    answer: 2, explain: "A physiotherapist tailors treatment to each patient's specific injury, this is a customised service (intangible, tailored). It is not a good (tangible product) and not standardised (same for all)." },

  { id: "24m8", topic: "human_resources", type: "mcq", marks: 1, src: "2024 HSC, Section I, Q8",
    stem: "An employee has engaged in misconduct and has been told to leave the organisation. Which of the following terms describes this employee's separation from the organisation?",
    options: ["Attrition", "Dismissal", "Redundancy", "Retrenchment"],
    answer: 1, explain: "Dismissal (summary dismissal) is termination due to serious misconduct. Attrition is natural turnover; redundancy/retrenchment are employer-initiated for business reasons, not employee misconduct." },

  { id: "24m9", topic: "operations", type: "mcq", marks: 1, src: "2024 HSC, Section I, Q9",
    stem: "The role of an operations manager is to",
    options: ["reduce waste and increase efficiency.", "reduce output and increase customisation.", "improve customisation and decrease speed.", "improve quality and decrease economies of scale."],
    answer: 0, explain: "The core role of an operations manager is to maximise efficiency and minimise waste in the transformation process, improving the ratio of outputs to inputs." },

  { id: "24m10", topic: "finance", type: "mcq", marks: 1, src: "2024 HSC, Section I, Q10",
    stem: "A business has the following financial information.\n\nWhat is the expense ratio for this business?",
    stimulus: [
      { type: "table", rows: [["Sales", "$800 000"], ["Cost of goods sold", "$200 000"], ["Gross profit", "$600 000"], ["Net profit", "$250 000"]] },
      { type: "note", text: "Expense ratio = total expenses ÷ sales" },
    ],
    options: ["25%", "31%", "35%", "44%"],
    answer: 3, explain: "Total expenses = Gross profit − Net profit = $600 000 − $250 000 = $350 000. Expense ratio = $350 000 ÷ $800 000 = 43.75% ≈ 44%." },

  { id: "24m11", topic: "marketing", type: "mcq", marks: 1, src: "2024 HSC, Section I, Q11",
    stem: "A distributor of a new mop surveys people in a shopping centre about their cleaning habits. The distributor then uses persuasive selling techniques to try and convince the shoppers surveyed to buy their mop. This is an example of which selling technique?",
    options: ["Sugging", "Personal selling", "Illegal marketing", "Relationship marketing"],
    answer: 0, explain: "Sugging (Selling Under the Guise of research) is when a business pretends to conduct a survey but is actually trying to sell. It is illegal under Australian consumer law." },

  { id: "24m12", topic: "human_resources", type: "mcq", marks: 1, src: "2024 HSC, Section I, Q12",
    stem: "A global business is considering replacing its operations manager for its European division. What type of employment offer would suit this position?",
    options: ["Casual contract", "Individual contract", "Collective agreement", "Greenfields agreement"],
    answer: 1, explain: "An individual contract (common law contract or AWA) is appropriate for a senior management position, it can be tailored to the specific role, responsibilities, and remuneration package." },

  { id: "24m13", topic: "marketing", type: "mcq", marks: 1, src: "2024 HSC, Section I, Q13",
    stem: "LimpLeaf Pty Ltd conducted research before entering the tea market. The research found that customers, because of the company's brand name, thought the product would be inferior. What factor is influencing the customers' choice?",
    options: ["Financial reasons", "Implied conditions", "Environmental reasons", "Psychological reasons"],
    answer: 3, explain: "Brand perception is a psychological factor influencing customer choice. Customers' subjective judgement based on the brand name is psychological, not financial, environmental, or legally implied." },

  { id: "24m14", topic: "finance", type: "mcq", marks: 1, src: "2024 HSC, Section I, Q14",
    stem: "The table shows the cash flow information for a business.\n\nWhat is the closing cash balance for September?",
    stimulus: [{ type: "table", headers: ["", "Jul", "Aug", "Sep"], rows: [["Opening balance ($)", "40 000", "", ""], ["Cash in ($)", "30 000", "10 000", "22 000"], ["Cash out ($)", "20 000", "13 000", "15 000"]] }],
    options: ["$7 000", "$47 000", "$54 000", "$150 000"],
    answer: 2, explain: "Jul closing = 40+30−20 = $50 000. Aug closing = 50+10−13 = $47 000. Sep closing = 47+22−15 = $54 000." },

  { id: "24m15", topic: "finance", type: "mcq", marks: 1, src: "2024 HSC, Section I, Q15",
    stem: "Which organisation functions as the market operator for companies wanting to raise public finance?",
    options: ["Australian Taxation Office", "Australian Securities Exchange", "Australian Prudential Regulation Authority", "Australian Securities and Investment Commission"],
    answer: 1, explain: "The Australian Securities Exchange (ASX) is the market operator where companies list shares to raise public finance through equity markets. ASIC regulates; APRA supervises banks/insurance; ATO handles tax." },

  { id: "24m16", topic: "marketing", type: "mcq", marks: 1, src: "2024 HSC, Section I, Q16",
    stem: "An Australian manufacturer sells its product in the USA and Australia without changing its marketing mix. What is an advantage of using the same marketing mix?",
    options: ["The promotion can be modified in each country.", "Economies of scale can be utilised in advertising.", "World sales will be maximised through customisation.", "It gives the same access to all customers around the world."],
    answer: 1, explain: "Standardisation (using the same marketing mix globally) allows economies of scale in advertising, producing one campaign at scale rather than bespoke campaigns per market." },

  { id: "24m17", topic: "finance", type: "mcq", marks: 1, src: "2024 HSC, Section I, Q17",
    stem: "A business owner is selling their business. If the business owner is unethical, what may they be motivated to do?",
    options: ["Undervalue assets and undervalue liabilities", "Overvalue assets and overvalue liabilities", "Understate income and overstate expenses", "Overstate income and understate expenses"],
    answer: 3, explain: "To maximise sale price, an unethical seller would overstate income (making the business look more profitable) and understate expenses (making it look leaner) to inflate perceived value." },

  { id: "24m18", topic: "operations", type: "mcq", marks: 1, src: "2024 HSC, Section I, Q18",
    stem: "Which of the following are common characteristics of a critical path analysis?",
    options: ["What tasks need to be done, how long they take, delivery timing", "What tasks need to be done, how long they take, what order is necessary", "Which tasks can be completed simultaneously, how long they take, quality testing", "Which tasks can be completed simultaneously, how long they take, how many components are required"],
    answer: 1, explain: "Critical path analysis identifies: what tasks are needed, how long each takes, and the required sequence (what order). Delivery timing, quality testing, and component counts are not its defining characteristics." },

  { id: "24m19", topic: "finance", type: "mcq", marks: 1, src: "2024 HSC, Section I, Q19",
    stem: "A private company wants to expand its operations. To raise funds, it intends to become a public listed company. What name is given to this form of equity finance?",
    options: ["Private equity", "Commercial bill", "New issue of shares", "Share purchase plan"],
    answer: 2, explain: "When a private company becomes publicly listed and issues shares to the public for the first time (IPO), this is a new issue of shares, a form of external equity finance." },

  { id: "24m20", topic: "marketing", type: "mcq", marks: 1, src: "2024 HSC, Section I, Q20",
    stem: "A company sets its primary marketing objective for 2025 to be the dominant market leader in the product it distributes. Its sales results are shown in the table.\n\nWhat should the marketing manager do to achieve the marketing objective?",
    stimulus: [{ type: "table", headers: ["Year", "Advertising Budget", "Sales ($)", "Market Share (%)"], rows: [["2023", "$1 million", "$10 million", "20%"], ["2024", "$2 million", "$15 million", "15%"]] }],
    options: ["Increase the advertising budget to boost market share", "Make no changes as sales have increased by $5 million", "Decrease the advertising budget as the market is growing", "Control the marketing mix as the market share has declined"],
    answer: 3, explain: "Despite rising sales, market share fell from 20% to 15%, the objective of market leadership is not being met. The manager must control and adjust the marketing mix to reverse the share decline." },

// ─── 2024 Section II ──────────────────────────────────────────────────────────

  { id: "24s21a", topic: "operations", type: "short", marks: 3, src: "2024 HSC, Section II, Q21(a)",
    stem: "A manufacturer of flags has seen a steady increase in sales, which coincides with the start of a major sporting event. The operations manager has increased the working hours of all employees to meet this demand. Explain the interdependence between operations and ONE other key business function for this business.",
    criteria: ["Provides an explanation of the interdependence between operations and ONE other business function for this business", "Demonstrates some understanding of the interdependence between operations and ONE other business function", "Provides some relevant information"],
    sample: "The operations department is dependent on the finance department who would need to provide a source of funds to pay for employee overtime and an increase in electricity, fabric etc. Finance is guided by the operations department's product specifications as this is what will determine the cost/finance required." },

  { id: "24s21b", topic: "operations", type: "short", marks: 3, src: "2024 HSC, Section II, Q21(b)",
    stem: "A department store is considering the quantity of products they will need to order and store for the following year.\n\nHow can each of these TWO products affect inventory management?",
    stimulus: [{ type: "table", headers: ["Product A", "Product B"], rows: [["Baby Milk Formula 900 g", "Air conditioner"]] }],
    criteria: ["Provides an explanation of how each product will affect inventory management", "Demonstrates some understanding of how product/s will affect inventory management", "Provides some relevant information"],
    sample: "Air conditioners are a bulky item and take considerable warehouse space to store at greater expense. Baby formula needs a FIFO or JIT inventory system, as it is a perishable item." },

  { id: "24s21c", topic: "operations", type: "short", marks: 4, src: "2024 HSC, Section II, Q21(c)",
    stem: "An ice-cream business is considering allowing customers to choose their own ice-cream flavours and toppings rather than having a set menu of ice-creams. Discuss the influence of visibility (customer contact) for this business.",
    criteria: ["Provides a discussion of the implications of visibility (customer contact) for this business", "Demonstrates a sound understanding of the implications of visibility (customer contact) for this business", "Demonstrates some understanding of visibility (customer contact) on this business", "Provides some relevant information"],
    sample: "If customers are able to choose their own toppings and flavours they are more likely to provide feedback on their favourite flavour and topping combinations. They may return to the store for repeat purchases which will lead to an increase in sales. However, this will come at a cost to the business as this will require a variety of ingredients and an increase in time required to make each item." },

  { id: "24s22a", topic: "human_resources", type: "short", marks: 2, src: "2024 HSC, Section II, Q22(a)",
    stem: "A business has highly skilled employees who are valued for their input in the decision-making process. Employees are consulted in setting objectives and have an influence on strategies adopted, including flexible working conditions. Outline the relationship between ONE stakeholder and the human resources function of this business.",
    criteria: ["Outlines the relationship between ONE stakeholder and the human resources function of this business", "Provides some relevant information"],
    sample: "The employee is a stakeholder who has an interest in the business, as they receive a wage or salary for the work that they complete. They rely on job security and being treated fairly whilst at work." },

  { id: "24s22b", topic: "human_resources", type: "short", marks: 3, src: "2024 HSC, Section II, Q22(b)",
    stem: "A business has highly skilled employees who are valued for their input in the decision-making process. Employees are consulted in setting objectives and have an influence on strategies adopted, including flexible working conditions. Explain how this business exhibits corporate social responsibility in the management of employees.",
    criteria: ["Provides an explanation of how this business exhibits corporate social responsibility in the management of employees", "Demonstrates some understanding of how this business exhibits CSR in employee management", "Provides some relevant information"],
    sample: "This business is ethical because it values its employees and includes them in the decision-making process, offering flexible working conditions. The effect of this is a boost in employee morale as they feel valued." },

  { id: "24s22c", topic: "human_resources", type: "short", marks: 5, src: "2024 HSC, Section II, Q22(c)",
    stem: "A business has highly skilled employees who are valued for their input in the decision-making process. Employees are consulted in setting objectives and have an influence on strategies adopted, including flexible working conditions. Justify the importance of maintenance in human resource management for this business.",
    criteria: ["Provides a thorough justification of the importance of maintenance in HRM for this business", "Provides a sound justification of the importance of maintenance in HRM for this business", "Demonstrates a sound understanding of the importance of maintenance of employees", "Demonstrates some understanding of the maintenance of employees", "Provides some relevant information"],
    sample: "Maintenance in HRM through effective rewards systems, including flexible working conditions, attract and retain highly skilled and talented employees, fostering motivation and loyalty. This should maintain a positive work culture, enhancing productivity, reducing turnover, and ultimately, reducing the costs associated with training new staff." },

  { id: "24s23a", topic: "marketing", type: "short", marks: 2, src: "2024 HSC, Section II, Q23(a)",
    stem: "A piano teaching business which guarantees highly qualified and experienced teachers is rapidly expanding across all states of Australia. Outline how marketing of this business relies on an effective human resources department.",
    criteria: ["Outlines how marketing of this business relies on a human resources department", "Provides some relevant information"],
    sample: "For this piano-teaching business to advertise and market itself as having highly skilled staff it will need to rely on the human resources department to hire teachers quickly, who are knowledgeable with the required skills." },

  { id: "24s23b", topic: "marketing", type: "short", marks: 4, src: "2024 HSC, Section II, Q23(b)",
    stem: "A piano teaching business which guarantees highly qualified and experienced teachers is rapidly expanding across all states of Australia. How may economic factors influence customers choosing this business?",
    criteria: ["Demonstrates a thorough understanding of how economic factors influence customers choosing this business", "Demonstrates a sound understanding of how economic factors influence customers choosing this business", "Demonstrates some understanding of economic factors and/or customer choice", "Provides some relevant information"],
    sample: "Economic forces will influence a customer's willingness and ability to spend. An economic downturn will reduce disposable income and customers may not choose piano lessons or elect a cheaper alternative. In a downturn, consumers will forego spending on non-essential goods/services and spend their income on essential items such as food and housing. A booming economy may see consumer optimism, more job security and/or rising incomes allowing them to seek quality options." },

  { id: "24s23c", topic: "marketing", type: "short", marks: 4, src: "2024 HSC, Section II, Q23(c)",
    stem: "A piano teaching business which guarantees highly qualified and experienced teachers is rapidly expanding across all states of Australia. Propose TWO ways this business can use market segmentation to continue its growth.",
    criteria: ["Proposes TWO relevant ways segmentation can be used by this business to continue its growth", "Proposes TWO ways segmentation can be used by this business", "Proposes ONE way segmentation can be used by this business OR identifies TWO segmentation methods", "Provides some relevant information"],
    sample: "This business could divide the total market into smaller segments so it can target its service to them more effectively and increase sales. For example, it could divide by demographics and advertise and tailor the service and price to a particular income level and social class. It could also segment by psychographic characteristics and appeal to aspirational pianists who may want to increase their skills and satisfy their personal interest." },

  { id: "24s24ai", topic: "finance", type: "short", marks: 2, src: "2024 HSC, Section II, Q24(a)(i)",
    stem: "The following is an extract from a business balance sheet.\n\nCalculate the current ratio for this business. Show all working.\n(Current ratio = current assets ÷ current liabilities)",
    stimulus: [{ type: "table", headers: ["Assets", "", "Liabilities", ""], rows: [["Cash at bank", "$5 000", "Overdraft", "$9 000"], ["Accounts receivable", "$20 000", "Accounts payable", "$11 000"], ["Inventory", "$5 000", "Long-term loan", "$90 000"], ["Office equipment", "$70 000", "Owners’ equity", ""], ["Motor vehicles", "$80 000", "Capital", "$55 000"], ["", "", "Retained profits", "$15 000"]] }],
    criteria: ["Calculates the correct current ratio and shows working", "Provides some relevant information"],
    sample: "Current assets = (Cash at bank + accounts receivable + inventory) ÷ (Overdraft + Accounts payable) = ($5 000 + $20 000 + $5 000) ÷ ($9 000 + $11 000) = $30 000 ÷ $20 000 = 1.5 = 1.5 : 1" },

  { id: "24s24aii", topic: "finance", type: "short", marks: 4, src: "2024 HSC, Section II, Q24(a)(ii)",
    stem: "The following is an extract from a business balance sheet.\n\nExplain the influence of ONE financial institution on the financial management of this business.",
    stimulus: [{ type: "table", headers: ["Assets", "", "Liabilities", ""], rows: [["Cash at bank", "$5 000", "Overdraft", "$9 000"], ["Accounts receivable", "$20 000", "Accounts payable", "$11 000"], ["Inventory", "$5 000", "Long-term loan", "$90 000"], ["Office equipment", "$70 000", "Owners’ equity", ""], ["Motor vehicles", "$80 000", "Capital", "$55 000"], ["", "", "Retained profits", "$15 000"]] }],
    criteria: ["Provides a thorough explanation of the influence of ONE financial institution on the financial management of this business", "Provides a sound explanation of the influence of ONE financial institution on financial management", "Demonstrates some understanding of the influence on financial management", "Provides some relevant information"],
    sample: "This business is highly geared and a financial institution, such as a bank, may not be willing to lend additional finance because they pose a risk, which restricts the business’s ability to achieve growth. Banks may increase interest rates, which will increase the business’s financial commitments and affect its liquidity and capacity to repay existing debt.",
    sampleBlocks: [{ type: "heading", text: "Answers could include:" }, { type: "list", items: ["Australian Securities Exchange", "Finance companies", "Investment banks", "Superannuation funds."] }] },

  { id: "24s24b", topic: "finance", type: "short", marks: 4, src: "2024 HSC, Section II, Q24(b)",
    stem: "Explain how offering discounts for early payment may improve a business's cash flow and reduce working capital.",
    criteria: ["Provides an explanation of how offering discounts for early payments can improve cash flow and reduce working capital", "Demonstrates a sound understanding of how offering discounts for early payments can improve cash flow and/or reduce working capital", "Demonstrates some understanding of discounts for early payments and/or working capital", "Provides some relevant information"],
    sample: "Discounts for early payments is a strategy that allows businesses to increase their cash flow in the short term. This leads to the business accessing funds faster than if it were to wait for a full payment by the original due date. This strategy will not improve the current ratio because the current assets will decrease by the discount offered. The discount offered will reduce the revenue collected and will reduce the current cash available for working capital." },

// ─── 2024 Section III/IV ──────────────────────────────────────────────────────

  { id: "24e25", topic: "human_resources", topics: ["marketing", "human_resources"], type: "extended", marks: 20, src: "2024 HSC, Section III, Q25",
    stem: "You have been hired as a consultant by the owner to write a business report.\n\nIn your report:\n• describe the product differentiation strategy for this business\n• discuss the current acquisition process for this business\n• recommend appropriate human resource strategies for this business.",
    stimulus: [
      { type: "paragraph", text: "Hans-Made Watches is a business that designs and hand-makes European-style watches with a lifetime warranty." },
      { type: "heading", text: "Features of the business include:" },
      { type: "list", items: ["family run business", "selling watches to the local community", "autocratic leadership style."] },
      { type: "paragraph", text: "The business has seen a decrease in sales and market share. The owner is retiring soon and his children are hoping to improve the performance of the business." },
      { type: "paragraph", text: "Below is an expression of interest for an assistant manager role that has been distributed to the business’s family and friends only." },
      { type: "table", caption: "Hans-Made Watches", rows: [["Established 1976"], ["Expression of interest: Assistant Manager"], ["You will be required to work in the shop and manage day-to-day business needs. Hours of work are 8 am to 6 pm Monday to Saturday."], ["General information\n• award wages offered\n• free parking onsite\n• use of coffee machine\n• reports to the owner\n• no experience necessary."]] },
    ],
    criteria: ["Comprehensively describes the product differentiation strategy for this business", "Comprehensively discusses the current acquisition process of this business", "Comprehensively recommends appropriate human resource strategies", "Makes effective use of the information provided, demonstrating extensive knowledge and understanding relevant to the question", "Presents a sustained, logical and cohesive business report integrating relevant business terminology and concepts", "Thoroughly describes the product differentiation strategy for this business", "Discusses the current acquisition process of this business", "Recommends appropriate human resource strategies", "Makes sound use of the information provided, demonstrating knowledge and understanding relevant to the question", "Presents a logical and cohesive business report using relevant business terminology and concepts", "Describes a product differentiation strategy for this business", "Describes the current acquisition process for this business", "Recommends human resource strategy(ies)", "Makes use of the information provided, demonstrating some knowledge and understanding relevant to the question", "Includes features of a business report and uses some business terminology and concepts", "Outlines a product differentiation strategy", "Makes a statement about the acquisition process", "Makes a statement about possible human resource strategy(ies)", "May include some features of a business report and uses some basic business terminology and/or concepts", "Makes some reference to marketing and/or human resources", "Uses basic business terminology"],
    criteriaBands: [
      { marks: "17–20", criteria: ["Comprehensively describes the product differentiation strategy for this business", "Comprehensively discusses the current acquisition process of this business", "Comprehensively recommends appropriate human resource strategies", "Makes effective use of the information provided, demonstrating extensive knowledge and understanding relevant to the question", "Presents a sustained, logical and cohesive business report integrating relevant business terminology and concepts"] },
      { marks: "13–16", criteria: ["Thoroughly describes the product differentiation strategy for this business", "Discusses the current acquisition process of this business", "Recommends appropriate human resource strategies", "Makes sound use of the information provided, demonstrating knowledge and understanding relevant to the question", "Presents a logical and cohesive business report using relevant business terminology and concepts"] },
      { marks: "9–12", criteria: ["Describes a product differentiation strategy for this business", "Describes the current acquisition process for this business", "Recommends human resource strategy(ies)", "Makes use of the information provided, demonstrating some knowledge and understanding relevant to the question", "Includes features of a business report and uses some business terminology and concepts"] },
      { marks: "5–8", criteria: ["Outlines a product differentiation strategy", "Makes a statement about the acquisition process", "Makes a statement about possible human resource strategy(ies)", "May include some features of a business report and uses some basic business terminology and/or concepts"] },
      { marks: "1–4", criteria: ["Makes some reference to marketing and/or human resources", "Uses basic business terminology"] },
    ],
    sample: "",
    sampleBlocks: [
      { type: "heading", text: "Answers could include:" },
      { type: "heading", text: "Marketing strategies" },
      { type: "list", items: ["Marketing segmentation, product/service differentiation and positioning", "Place/distribution – distribution channels", "Price and quality interaction", "Products – goods and/or services", "branding", "packaging."] },
      { type: "heading", text: "Acquisition process" },
      { type: "list", items: ["Identifying staffing needs", "Recruitment", "Selection."] },
      { type: "heading", text: "Human resources strategies" },
      { type: "list", items: ["Leadership style", "Job design – general or specific tasks", "Recruitment – internal or external, general or specific skills", "Training and development – current or future skills", "Rewards – monetary and non-monetary, individual or group, performance pay."] },
    ] },

  { id: "24e26", topic: "finance", type: "extended", marks: 20, src: "2024 HSC, Section IV, Q26",
    stem: "How can financial strategies affect the objectives of financial management?",
    criteria: ["Demonstrates a comprehensive understanding of how financial strategies affect objectives of financial management", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts", "Demonstrates a sound understanding of how financial strategies affect objectives of financial management", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts", "Demonstrates some understanding of how financial strategies affect objectives of financial management", "Makes reference to case study/studies and contemporary business issues", "Communicates using business terminology and concepts", "Describes some aspects of financial strategies and/or financial objectives", "Makes limited reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and/or concepts", "Makes limited reference to financial strategies and/or financial objectives", "May identify case study/studies", "Uses basic business terminology and/or concepts"],
    criteriaBands: [
      { marks: "17–20", criteria: ["Demonstrates a comprehensive understanding of how financial strategies affect objectives of financial management", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts"] },
      { marks: "13–16", criteria: ["Demonstrates a sound understanding of how financial strategies affect objectives of financial management", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts"] },
      { marks: "9–12", criteria: ["Demonstrates some understanding of how financial strategies affect objectives of financial management", "Makes reference to case study/studies and contemporary business issues", "Communicates using business terminology and concepts"] },
      { marks: "5–8", criteria: ["Describes some aspects of financial strategies and/or financial objectives", "Makes limited reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and/or concepts"] },
      { marks: "1–4", criteria: ["Makes limited reference to financial strategies and/or financial objectives", "May identify case study/studies", "Uses basic business terminology and/or concepts"] },
    ],
    sample: "",
    sampleBlocks: [
      { type: "heading", text: "Answers could include:" },
      { type: "heading", text: "Objectives of financial management:" },
      { type: "list", items: ["Profitability, growth, efficiency, liquidity, solvency", "Short term and long term."] },
      { type: "heading", text: "Financial management strategies:" },
      { type: "list", items: ["Cash flow management", "cash flow statements", "distribution of payments, discounts for early payment, factoring", "Working capital management", "control of current assets – cash, receivables, inventories", "control of current liabilities – payables, loans, overdrafts", "strategies – leasing, sale and lease back", "Profitability management", "cost controls – fixed and variable, cost centres, expense minimisation", "revenue controls – marketing objectives", "Global financial management", "exchange rates", "interest rates", "methods of international payment – payment in advance, letter of credit, clean payment, bill of exchange", "hedging", "derivatives."] },
    ] },

  { id: "24e27", topic: "operations", type: "extended", marks: 20, src: "2024 HSC, Section IV, Q27",
    stem: "How can operations strategies affect corporate social responsibility?",
    criteria: ["Demonstrates a comprehensive understanding of how operations strategies affect corporate social responsibility", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts", "Demonstrates a sound understanding of how operations strategies affect corporate social responsibility", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts", "Demonstrates a sound understanding of operations strategies and/or corporate social responsibility", "Makes reference to case study/studies and contemporary business issues", "Communicates using business terminology and concepts", "Describes some aspects of operations strategies and/or corporate social responsibility", "Makes limited reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and/or concepts", "Makes limited reference to operations strategies and/or corporate social responsibility", "May identify case study/studies", "Uses basic business terminology and/or concepts"],
    criteriaBands: [
      { marks: "17–20", criteria: ["Demonstrates a comprehensive understanding of how operations strategies affect corporate social responsibility", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts"] },
      { marks: "13–16", criteria: ["Demonstrates a sound understanding of how operations strategies affect corporate social responsibility", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts"] },
      { marks: "9–12", criteria: ["Demonstrates a sound understanding of operations strategies and/or corporate social responsibility", "Makes reference to case study/studies and contemporary business issues", "Communicates using business terminology and concepts"] },
      { marks: "5–8", criteria: ["Describes some aspects of operations strategies and/or corporate social responsibility", "Makes limited reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and/or concepts"] },
      { marks: "1–4", criteria: ["Makes limited reference to operations strategies and/or corporate social responsibility", "May identify case study/studies", "Uses basic business terminology and/or concepts"] },
    ],
    sample: "",
    sampleBlocks: [
      { type: "heading", text: "Answers could include:" },
      { type: "paragraph", text: "Any operations strategy that affects CSR:" },
      { type: "list", items: ["Quality management", "Technology", "Outsourcing", "Inventory management", "Supply chain management", "Global factors", "global sourcing", "economies of scale", "scanning and learning", "research and development", "New product or service design and development."] },
      { type: "heading", text: "Corporate social responsibility:" },
      { type: "list", items: ["The difference between legal compliance and ethical responsibility", "Environmental sustainability and social responsibility."] },
    ] },

// ─── 2025 Section I ───────────────────────────────────────────────────────────

  { id: "25m1", topic: "operations", type: "mcq", marks: 1, src: "2025 HSC, Section I, Q1",
    stem: "Which performance objective is a business trying to achieve by minimising waste in production?",
    options: ["Cost", "Flexibility", "Speed", "Volume"],
    answer: 0, explain: "Minimising waste directly reduces production costs, achieving the cost performance objective. Flexibility relates to adapting to change; speed to delivery time; volume to quantity produced." },

  { id: "25m2", topic: "marketing", type: "mcq", marks: 1, src: "2025 HSC, Section I, Q2",
    stem: "A dealership customises the caravans it sells by putting solar panels on the roof. Which type of market does this business operate in?",
    options: ["Mass", "Niche", "Production", "Resource"],
    answer: 1, explain: "The dealership serves a specific segment, buyers wanting solar-equipped caravans. This is a niche market: a specialised subset of the broader caravan market." },

  { id: "25m3", topic: "finance", type: "mcq", marks: 1, src: "2025 HSC, Section I, Q3",
    stem: "Which of the following is an essential component of a balance sheet?",
    options: ["Assets", "Expenses", "Sales", "Wages"],
    answer: 0, explain: "A balance sheet records assets, liabilities, and owner's equity at a point in time. Expenses, sales, and wages appear in the income statement (profit and loss), not the balance sheet." },

  { id: "25m4", topic: "human_resources", type: "mcq", marks: 1, src: "2025 HSC, Section I, Q4",
    stem: "An employee is applying for maternity leave. She is told her job will not exist when she plans to return to work. What form of discrimination may have occurred?",
    options: ["Age", "Disability", "Racial", "Sex"],
    answer: 3, explain: "Denying a woman's right to return from maternity leave constitutes sex/gender discrimination, a breach of equal employment opportunity law protecting pregnancy-related rights." },

  { id: "25m5", topic: "marketing", type: "mcq", marks: 1, src: "2025 HSC, Section I, Q5",
    stem: "The price of a fitness watch is advertised as on special for $159. The store usually sells this watch for $159. Which area of consumer law has been broken?",
    options: ["Warranties", "Implied conditions", "Price discrimination", "Deceptive and misleading advertising"],
    answer: 3, explain: "Advertising a product as 'on special' at its regular price is deceptive, it misleads consumers into believing they are receiving a discount. This breaches the Australian Consumer Law prohibition on misleading representations." },

  { id: "25m6", topic: "marketing", type: "mcq", marks: 1, src: "2025 HSC, Section I, Q6",
    stem: "An international clothing brand uses Japanese fashion trends and cultural preferences in its designs and advertisements for its Japanese market. Which global marketing strategy is being used?",
    options: ["Customisation", "Standardisation", "Global branding", "Price and quality interaction"],
    answer: 0, explain: "Customisation adapts the marketing mix to local market preferences and cultural requirements. Using local trends specifically for the Japanese market is customisation, not the uniform approach of standardisation." },

  { id: "25m7", topic: "operations", type: "mcq", marks: 1, src: "2025 HSC, Section I, Q7",
    stem: "Which of the following is an essential aspect of logistics?",
    options: ["Reorganising plant layout", "Checking the quality of all output", "Assessing materials handling and packaging", "Creating a budget for new machinery and equipment"],
    answer: 2, explain: "Logistics involves managing the physical flow of goods including materials handling, packaging, warehousing, and distribution. Plant layout and quality checking are operations process concerns; budgeting for machinery is finance/investment." },

  { id: "25m8", topic: "operations", type: "mcq", marks: 1, src: "2025 HSC, Section I, Q8",
    stem: "A business, as part of its quality management strategy, demonstrates an ongoing commitment to make its operations more efficient and effective. This is an example of which of the following?",
    options: ["Assurance", "Control", "Flexibility", "Improvement"],
    answer: 3, explain: "Continual improvement (kaizen) is the quality management approach involving an ongoing commitment to incrementally improving efficiency and effectiveness. Quality assurance sets standards; quality control checks against them." },

  { id: "25m9", topic: "finance", type: "mcq", marks: 1, src: "2025 HSC, Section I, Q9",
    stem: "A business, with a 30-day credit policy, collects accounts receivables on average every 26 days. Which objective of financial management is this business aiming to achieve?",
    options: ["Efficiency", "Growth", "Minimisation", "Solvency"],
    answer: 0, explain: "Collecting receivables faster than the 30-day credit period demonstrates efficient management of working capital, using assets effectively to generate revenue. This is the efficiency objective." },

  { id: "25m10", topic: "human_resources", type: "mcq", marks: 1, src: "2025 HSC, Section I, Q10",
    stem: "Which of the following lists elements of the legal framework that influences human resource management?",
    options: ["Code of conduct, work health and safety, awards", "Code of conduct, work health and safety, workers compensation", "Common law, minimum employment standards, customer contact", "Common law, minimum employment standards, workers compensation"],
    answer: 3, explain: "The legal HR framework includes common law (employment contracts), minimum employment standards (NES under Fair Work Act), and workers compensation. Codes of conduct are internal/ethical; customer contact is not a legal HR framework." },

  { id: "25m11", topic: "human_resources", type: "mcq", marks: 1, src: "2025 HSC, Section I, Q11",
    stem: "What is a benefit of using internal recruitment for a senior management position?",
    options: ["The position will always be filled.", "It encourages staff to seek professional growth.", "There is a larger pool of applicants to choose from.", "The business can gain perspectives from outside of the business."],
    answer: 1, explain: "Internal recruitment motivates existing employees by demonstrating that promotion opportunities exist, encouraging professional development. A larger pool and external perspectives are advantages of external recruitment." },

  { id: "25m12", topic: "operations", type: "mcq", marks: 1, src: "2025 HSC, Section I, Q12",
    stem: "A business is introducing leading edge technology and is experiencing employee resistance. What is the most likely reason for this resistance to change?",
    options: ["Fear of the unknown", "Redundancy payments", "Increased financial costs", "Reorganisation of plant layout"],
    answer: 0, explain: "The most common psychological reason for employee resistance to new technology is fear of the unknown, uncertainty about how roles will change and whether they might lose their job." },

  { id: "25m13", topic: "marketing", type: "mcq", marks: 1, src: "2025 HSC, Section I, Q13",
    stem: "A marketing manager recognises that poor customer service has negatively affected sales results. In which part of the marketing process would this recognition occur?",
    options: ["Identifying target markets", "Undertaking situational analysis", "Developing marketing strategies", "Establishing marketing objectives"],
    answer: 1, explain: "Recognising that poor customer service hurts sales requires analysing the current situation, this is the situational analysis (SWOT) stage, which identifies weaknesses before setting objectives or strategies." },

  { id: "25m14", topic: "marketing", type: "mcq", marks: 1, src: "2025 HSC, Section I, Q14",
    stem: "Which of the following marketing strategies could a new gym adopt in order to attract customers and become a viable business?",
    options: ["Charge a high price during the introductory stage", "Set an introductory price that is the same as its competitors", "Offer a first month membership at a discount to the normal monthly fee", "Offer a lifetime membership that is below the cost of providing the service"],
    answer: 2, explain: "A new gym should use price penetration, offering an introductory discount attracts price-sensitive customers and builds membership base. A high price deters new customers; below-cost lifetime memberships are financially unsustainable." },

  { id: "25m15", topic: "human_resources", type: "mcq", marks: 1, src: "2025 HSC, Section I, Q15",
    stem: "A graph of employee data is shown.\n\nWhat would be the most likely cause of the change in data after month 3?",
    stimulus: [{
      type: "lineChart",
      title: "Employee data",
      yLabel: "No. of employees",
      xLabels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5"],
      yMin: 0,
      yMax: 40,
      yStep: 5,
      series: [
        { label: "Performance", values: [18, 28, 35, 19, 15], stroke: "#1A1A1A", dash: "8 7" },
        { label: "Stress levels", values: [10, 13, 15, 25, 29], stroke: "#1A1A1A" },
        { label: "Absenteeism", values: [5, 5, 5, 20, 21], stroke: "#1A1A1A", dash: "2 5" },
      ],
    }],
    options: ["Staff completed a productivity course.", "Employees were given a monetary bonus.", "There was a change in senior management.", "Improvements in work health and safety were made."],
    answer: 2, explain: "A change in senior management (e.g. to an autocratic style) is the most likely cause of simultaneous increases in stress and absenteeism alongside falling performance. Courses, bonuses, and WH&S improvements would produce opposite effects." },

  { id: "25m16", topic: "finance", type: "mcq", marks: 1, src: "2025 HSC, Section I, Q16",
    stem: "An extract from a business document is shown.\n\nIn which month should this business have adopted cash flow management strategies?",
    stimulus: [{
      type: "table",
      headers: ["", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
      rows: [
        ["Opening\nbalance", "2 000", "", "", "", "", ""],
        ["Cash in ($)", "5 000", "3 000", "5 000", "8 000", "8 000", "4 000"],
        ["Cash out ($)", "5 000", "5 000", "7 000", "3 000", "10 000", "2 000"],
        ["Closing\nbalance", "", "", "", "", "", ""],
      ],
    }],
    options: ["August", "September", "November", "December"],
    answer: [0, 1], explain: "The official marking guideline accepts A and B for this question." },

  { id: "25m17", topic: "human_resources", type: "mcq", marks: 1, src: "2025 HSC, Section I, Q17",
    stem: "A chef’s finger has been cut off during a workplace accident.\n\nWhich of the following steps should the employer take?",
    options: [
      "Work site is assessed for safety; Employee takes annual leave; Injury management plan is created",
      "Injury management plan is created; Employee returns to work; Employee takes annual leave",
      "Work site is assessed for safety; Injury management plan is created; Employee is assigned suitable duties",
      "Modified work hours are organised; Injury management plan is created; Employee returns to work",
    ],
    optionBlocks: [
      [{ type: "table", headers: ["Step one", "Step two", "Step three"], rows: [["Work site is assessed\nfor safety", "Employee takes\nannual leave", "Injury management\nplan is created"]] }],
      [{ type: "table", headers: ["Step one", "Step two", "Step three"], rows: [["Injury management\nplan is created", "Employee returns to\nwork", "Employee takes\nannual leave"]] }],
      [{ type: "table", headers: ["Step one", "Step two", "Step three"], rows: [["Work site is assessed\nfor safety", "Injury management\nplan is created", "Employee is assigned\nsuitable duties"]] }],
      [{ type: "table", headers: ["Step one", "Step two", "Step three"], rows: [["Modified work hours\nare organised", "Injury management\nplan is created", "Employee returns to\nwork"]] }],
    ],
    answer: 2, explain: "The correct WH&S response sequence: (1) assess the work site for safety to prevent further injury, (2) create an injury management plan for the affected employee, (3) assign suitable duties during recovery." },

  { id: "25m18", topic: "finance", type: "mcq", marks: 1, src: "2025 HSC, Section I, Q18",
    stem: "In the hope of generating long-term profit, a medical company spends $2 billion developing medicine to cure a disease. This is recorded on the company's balance sheet. Which limitation of financial reports does this demonstrate?",
    options: ["Timing issues", "Valuing assets", "Debt repayment", "Capitalising expenses"],
    answer: 3, explain: "Capitalising expenses means recording an expense (R&D spend) as an asset on the balance sheet rather than an immediate expense. This inflates the balance sheet and understates current-period expenses, a significant limitation of financial reporting." },

  { id: "25m19", topic: "operations", type: "mcq", marks: 1, src: "2025 HSC, Section I, Q19",
    stem: "A retail franchise is opening a new store. Which of the following is the correct sequence for its operations process?",
    options: ["Product → task design → materials", "Facilities → control → customer service", "Information → warranties → improvement", "Human resources → planning → customers"],
    answer: 1, explain: "Operations processes in retail involve: facilities (physical store setup), control systems (inventory/quality monitoring), and customer service (the retail experience delivered to customers)." },

  { id: "25m20", topic: "finance", type: "mcq", marks: 1, src: "2025 HSC, Section I, Q20",
    stem: "A business calculated its gearing ratio as follows.\n\nWhich of the following is a correct statement about the business in 2024?",
    stimulus: [{
      type: "table",
      caption: "Gearing ratio",
      rows: [
        ["2023", "75%"],
        ["2024", "66%"],
      ],
    }],
    options: ["The debt to equity ratio has improved.", "There is a higher risk of business failure.", "The solvency of this business has declined.", "The owner will have a higher return-on-equity."],
    answer: 0, explain: "A decrease in the gearing ratio (75%→66%) means the business is using less debt relative to equity, an improvement in the debt-to-equity ratio. Lower gearing reduces failure risk and improves solvency." },

// ─── 2025 Section II ──────────────────────────────────────────────────────────

  { id: "25s21a", topic: "operations", type: "short", marks: 2, src: "2025 HSC, Section II, Q21(a)",
    stem: "A cafe produces quality food and friendly, personalised service. It donates its left-over food to a local charity at the end of each day. Outline the corporate social responsibility demonstrated by this business.",
    criteria: ["Outlines the corporate social responsibility demonstrated by this business", "Provides some relevant information"],
    criteriaBands: [
      { marks: "2", criteria: ["Outlines the corporate social responsibility demonstrated by this business"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "The cafe can demonstrate corporate social responsibility by donating food to a local charity that supports the community." },

  { id: "25s21b", topic: "operations", type: "short", marks: 2, src: "2025 HSC, Section II, Q21(b)",
    stem: "A cafe produces quality food and friendly, personalised service. Outline the difference between goods and services in this business.",
    criteria: ["Outlines the difference between goods and services in this business", "Provides some relevant information"],
    criteriaBands: [
      { marks: "2", criteria: ["Outlines the difference between goods and services in this business"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "The cafe produces meals (goods) that are perishable. Services can be customised or standardised. This cafe is known for its friendly service." },

  { id: "25s21c", topic: "operations", type: "short", marks: 3, src: "2025 HSC, Section II, Q21(c)",
    stem: "A cafe produces quality food and friendly, personalised service. It donates its left-over food to a local charity at the end of each day. Explain the influence of ONE legal regulation on the operations management of this business.",
    criteria: ["Provides an explanation of the influence of ONE legal regulation on the operations management of this business", "Demonstrates some understanding of the influence of a legal regulation on the operations management of this business", "Provides some relevant information"],
    criteriaBands: [
      { marks: "3", criteria: ["Provides an explanation of the influence of ONE legal regulation on the operations management of this business"] },
      { marks: "2", criteria: ["Demonstrates some understanding of the influence of a legal regulation on the operations management of this business"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "Legal regulations such as food handling and storage could influence this business because they must ensure that they meet the standards required. This may require specific training of employees on how to handle and store food correctly to ensure the quality of the food.",
    sampleBlocks: [{ type: "heading", text: "Answers could include:" }, { type: "list", items: ["Work, health and safety", "Zoning and seating regulations", "Waste disposal"] }] },

  { id: "25s21d", topic: "operations", type: "short", marks: 4, src: "2025 HSC, Section II, Q21(d)",
    stem: "The owners of the cafe would like to expand their dessert range. They plan to outsource cakes from the local bakery to sell at their cafe. Discuss the implications of outsourcing the new desserts for the operation of this business.",
    criteria: ["Provides a detailed discussion of the implications of outsourcing the new desserts for the operation of this business", "Provides a sound discussion of the implications of outsourcing the new desserts for the operation of this business", "Demonstrates some understanding of outsourcing", "Provides some relevant information"],
    criteriaBands: [
      { marks: "4", criteria: ["Provides a detailed discussion of the implications of outsourcing the new desserts for the operation of this business"] },
      { marks: "3", criteria: ["Provides a sound discussion of the implications of outsourcing the new desserts for the operation of this business"] },
      { marks: "2", criteria: ["Demonstrates some understanding of outsourcing"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "Outsourcing cakes will mean the cafe is no longer required to bake cakes. The business can focus on the core activity of making excellent meals, resulting in greater customer satisfaction. They can also have access to expert bakers to make the cakes. However, there may be loss of quality and supply control of the cakes." },

  { id: "25s22a", topic: "marketing", type: "short", marks: 2, src: "2025 HSC, Section II, Q22(a)",
    stem: "A business sells stainless steel water bottles. However, customers have complained that the bottles leak, and that they do not come in biodegradable packaging. Identify ONE weakness and ONE potential threat for this business.",
    criteria: ["Identifies ONE weakness and ONE threat for this business", "Identifies ONE weakness or ONE threat for this business"],
    criteriaBands: [
      { marks: "2", criteria: ["Identifies ONE weakness and ONE threat for this business"] },
      { marks: "1", criteria: ["Identifies ONE weakness or ONE threat for this business"] },
    ],
    sample: "Weakness: leaking bottles. Potential threat: changing attitudes towards environmental expectations." },

  { id: "25s22b", topic: "marketing", type: "short", marks: 4, src: "2025 HSC, Section II, Q22(b)",
    stem: "A business sells stainless steel water bottles. However, customers have complained that the bottles leak, and that they do not come in biodegradable packaging. Justify TWO product strategies that could be implemented by this business to gain a competitive advantage.",
    criteria: ["Justifies TWO product strategies that could be implemented by the business to gain a competitive advantage", "Justifies ONE and outlines ONE product strategy that could be implemented by the business to gain a competitive advantage", "Justifies ONE product strategy that could be implemented by the business", "Outlines TWO product strategies that could be implemented by the business", "Provides some relevant information"],
    criteriaBands: [
      { marks: "4", criteria: ["Justifies TWO product strategies that could be implemented by the business to gain a competitive advantage"] },
      { marks: "3", criteria: ["Justifies ONE and outlines ONE product strategy that could be implemented by the business to gain a competitive advantage"] },
      { marks: "2", criteria: ["Justifies ONE product strategy that could be implemented by the business", "OR", "Outlines TWO product strategies that could be implemented by the business"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "The business could implement a new packaging strategy where the bottle packaging box is made from recyclable materials. This would persuade customers to purchase the product over competitor products by enhancing the ecofriendly features of the packaging. A branding strategy allows the product to be well known by the consumers. The business could include a modern logo and colour their bottles a distinct green which is synonymous with the environment. Implementing both strategies will allow the business to gain a competitive advantage through increased product awareness." },

  { id: "25s22c", topic: "marketing", type: "short", marks: 3, src: "2025 HSC, Section II, Q22(c)",
    stem: "A business sells stainless steel water bottles. However, customers have complained that the bottles leak, and that they do not come in biodegradable packaging. Why is it important for this business to monitor and control its marketing strategies?",
    criteria: ["Provides an explanation of the importance of monitoring and controlling the marketing strategies for this business", "Demonstrates some understanding of monitoring and controlling", "Provides some relevant information"],
    criteriaBands: [
      { marks: "3", criteria: ["Provides an explanation of the importance of monitoring and controlling the marketing strategies for this business"] },
      { marks: "2", criteria: ["Demonstrates some understanding of monitoring and controlling"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "Monitoring and controlling the marketing strategy is essential to keep this business informed regarding customer complaints about the bottles leaking. Managers need to look at whether or not the objective of gaining a competitive advantage is being met and what actions can be taken. By comparing actual and planned results the business can plan effectively for the future and ensure the marketing strategies are being met." },

  { id: "25s23a", topic: "finance", type: "short", marks: 2, src: "2025 HSC, Section II, Q23(a)",
    stem: "A travel agency is focused on expanding its sales in several countries. The business provided the following financial information.\n\nWhat does the expense ratio for 2024 indicate for this business?",
    stimulus: [
      { type: "table", headers: ["", "2023", "2024"], rows: [["Sales", "600 000", "700 000"], ["Total expenses", "140 000", "210 000"], ["Net profit", "160 000", "170 000"], ["Expense ratio", "23.3%", "?"], ["Debt to equity ratio", "0.6 : 1", "1 : 1"], ["Return on equity ratio", "8%", "8.5%"]] },
      { type: "table", caption: "Industry averages", headers: ["", "2023", "2024"], rows: [["Expense ratio", "23%", "20%"], ["Debt to equity ratio", "0.6 : 1", "0.6 : 1"], ["Return on equity ratio", "11%", "12%"]] },
      { type: "note", text: "Expense ratio = total expenses ÷ sales × 100" },
    ],
    criteria: ["Shows an understanding of what the expense ratio for 2024 indicates for this business", "Provides some relevant information"],
    criteriaBands: [
      { marks: "2", criteria: ["Shows an understanding of what the expense ratio for 2024 indicates for this business"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "The expense ratio is 210 000 ÷ 700 000 × 100 = 30%.\n\nThe efficiency of the business is a concern as the expense ratio is higher than 2023 and the industry average." },

  { id: "25s23b", topic: "finance", type: "short", marks: 4, src: "2025 HSC, Section II, Q23(b)",
    stem: "A travel agency is focused on expanding its sales in several countries. The business provided the following financial information.\n\nHow can undertaking a comparative ratio analysis improve this business’s financial outcome?",
    stimulus: [
      { type: "table", headers: ["", "2023", "2024"], rows: [["Sales", "600 000", "700 000"], ["Total expenses", "140 000", "210 000"], ["Net profit", "160 000", "170 000"], ["Expense ratio", "23.3%", "?"], ["Debt to equity ratio", "0.6 : 1", "1 : 1"], ["Return on equity ratio", "8%", "8.5%"]] },
      { type: "table", caption: "Industry averages", headers: ["", "2023", "2024"], rows: [["Expense ratio", "23%", "20%"], ["Debt to equity ratio", "0.6 : 1", "0.6 : 1"], ["Return on equity ratio", "11%", "12%"]] },
      { type: "note", text: "Expense ratio = total expenses ÷ sales × 100" },
    ],
    criteria: ["Demonstrates a comprehensive understanding of how comparative ratio analysis can be used to improve the financial outcomes of the business", "Demonstrates a sound understanding of how comparative ratio analysis can be used to improve financial outcomes of the business", "Shows some understanding of how comparative ratio analysis can be used", "Provides some relevant information"],
    criteriaBands: [
      { marks: "4", criteria: ["Demonstrates a comprehensive understanding of how comparative ratio analysis can be used to improve the financial outcomes of the business"] },
      { marks: "3", criteria: ["Demonstrates a sound understanding of how comparative ratio analysis can be used to improve financial outcomes of the business"] },
      { marks: "2", criteria: ["Shows some understanding of how comparative ratio analysis can be used"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "Ratios can be compared across different years, against industry standards or benchmarks.\n\nIn this business, the expense ratio has declined; the business is not efficiently spending funds and can begin to control expenses which may improve profitability.\n\nAnalysis of the gearing ratio and return on equity against industry averages shows the business is performing poorly. They may decide to use equity and not borrow more as they are already highly geared and taking more risks than others, which affects their long-term viability." },

  { id: "25s23c", topic: "finance", type: "short", marks: 4, src: "2025 HSC, Section II, Q23(c)",
    stem: "A travel agency is focused on expanding its sales in several countries. The business provided the following financial information.\n\nExplain how TWO global market influences could affect the solvency of this business.",
    stimulus: [
      { type: "table", headers: ["", "2023", "2024"], rows: [["Sales", "600 000", "700 000"], ["Total expenses", "140 000", "210 000"], ["Net profit", "160 000", "170 000"], ["Expense ratio", "23.3%", "?"], ["Debt to equity ratio", "0.6 : 1", "1 : 1"], ["Return on equity ratio", "8%", "8.5%"]] },
      { type: "table", caption: "Industry averages", headers: ["", "2023", "2024"], rows: [["Expense ratio", "23%", "20%"], ["Debt to equity ratio", "0.6 : 1", "0.6 : 1"], ["Return on equity ratio", "11%", "12%"]] },
      { type: "note", text: "Expense ratio = total expenses ÷ sales × 100" },
    ],
    criteria: ["Explains how TWO global market influences could affect the solvency of this business", "Outlines TWO global market influences that affect the solvency of this business", "Outlines ONE global market influence", "Identifies TWO global market influences", "Provides some relevant information"],
    criteriaBands: [
      { marks: "4", criteria: ["Explains how TWO global market influences could affect the solvency of this business"] },
      { marks: "3", criteria: ["Outlines TWO global market influences that affect the solvency of this business"] },
      { marks: "2", criteria: ["Outlines ONE global market influence", "OR", "Identifies TWO global market influences"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "This travel agency will be impacted by the global economic outlook. If the international economy is strong, the business may need more funds to grow as their travel service expands. If these funds are borrowed, it will further increase the debt and negatively impact solvency.\n\nIf interest rates are decreasing, the amount borrowed overseas will have less interest expense and reduce the risks undertaken by the business, lowering the overall gearing of this business." },

  { id: "25s24a", topic: "human_resources", type: "short", marks: 3, src: "2025 HSC, Section II, Q24(a)",
    stem: "Describe the influence technology has on the human resources function.",
    criteria: ["Describes the influence of technology on the human resources function", "Outlines the influence of technology on the human resources function", "Provides some relevant information"],
    criteriaBands: [
      { marks: "3", criteria: ["Describes the influence of technology on the human resources function"] },
      { marks: "2", criteria: ["Outlines the influence of technology on the human resources function"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "Technology such as video conferencing, apps and websites, and online storage allow both employers and employees to access their work remotely and work collaboratively offsite.\n\nThese technologies have allowed staff to work remotely at the same pace as staff working in the office." },

  { id: "25s24b", topic: "human_resources", type: "short", marks: 3, src: "2025 HSC, Section II, Q24(b)",
    stem: "Employees at a factory have been discouraged by their employers from joining a union. Explain TWO possible reasons for this.",
    criteria: ["Explains TWO possible reasons for employers discouraging employees from joining a union", "Outlines TWO possible reasons", "Explains ONE possible reason", "Provides some relevant information"],
    criteriaBands: [
      { marks: "3", criteria: ["Explains TWO possible reasons for employers discouraging employees from joining a union"] },
      { marks: "2", criteria: ["Outlines TWO possible reasons", "OR", "Explains ONE possible reason"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "Unions will advocate for higher pay and better conditions like leave and work health and safety processes. These changes are costly and will reduce the profits of the business. Employers may also discourage unionisation as it brings their processes under further scrutiny which could lead to fines, staff turnover and industrial action which is also costly." },

  { id: "25s24c", topic: "human_resources", type: "short", marks: 4, src: "2025 HSC, Section II, Q24(c)",
    stem: "A business pays migrant workers less, and bullies staff members. Explain how this business is engaging in illegal practices.",
    criteria: ["Provides a thorough explanation of how this business is engaging in illegal practices", "Provides a sound explanation of how this business is engaging in illegal practices", "Demonstrates some understanding of illegal practices", "Provides some relevant information"],
    criteriaBands: [
      { marks: "4", criteria: ["Provides a thorough explanation of how this business is engaging in illegal practices"] },
      { marks: "3", criteria: ["Provides a sound explanation of how this business is engaging in illegal practices"] },
      { marks: "2", criteria: ["Demonstrates some understanding of illegal practices"] },
      { marks: "1", criteria: ["Provides some relevant information"] },
    ],
    sample: "Under Australian government laws it is illegal to discriminate and pay migrant workers less, as they may not be meeting minimum wage rates or in breach of awards and enterprise agreements. Bullying staff is illegal and could be in breach of antidiscrimination laws or work, health and safety. Businesses who undertake these actions can be taken to court and fined." },

// ─── 2025 Section III/IV ──────────────────────────────────────────────────────

  { id: "25e25", topic: "operations", topics: ["operations", "human_resources"], type: "extended", marks: 20, src: "2025 HSC, Section III, Q25",
    stem: "You have been hired as a consultant by the owner to write a business report.\n\nIn your report:\n• outline ONE relevant human resource management process that the business could use\n• describe the purpose of the above chart and any issues found in the chart\n• recommend appropriate global factors the business can use to achieve cost leadership.",
    stimulus: [
      { type: "paragraph", text: "XYZ Equipment Pty Ltd is an Australian business which manufactures equipment for Australian schools." },
      { type: "paragraph", text: "The business would like to relocate and manufacture overseas by the beginning of 2026 for the following reasons:" },
      { type: "list", items: ["labour and production costs in Australia are too high", "product is of poor quality", "Australia has strict environmental laws", "there is a potential growth market in Asia."] },
      { type: "paragraph", text: "The business has provided a chart that shows their initial plan for the relocation." },
      {
        type: "gantt",
        caption: "Relocation plan for XYZ Equipment Pty Ltd 2025–2026",
        columns: ["October", "November", "December", "January", "February", "March"],
        rows: [
          { label: "Close Australian factory", active: ["October"] },
          { label: "Source new Asian suppliers", active: ["October"] },
          { label: "Manufacture equipment", active: ["November"] },
          { label: "Build new factory", active: ["December"] },
          { label: "Determine staffing needs", active: ["January", "February", "March"] },
          { label: "Lease warehouse for storage", active: ["February"] },
          { label: "Register business name", active: ["March"] },
        ],
      },
    ],
    criteria: ["Provides an outline of ONE relevant human resource management process that the business could use", "Comprehensively describes the purpose of the chart and issues found", "Comprehensively recommends appropriate global factors that the business can use to achieve cost leadership", "Presents a sustained, logical and cohesive business report integrating relevant business terminology and concepts", "Thoroughly describes the purpose of the chart and issues found", "Recommends appropriate global factors that the business can use to achieve cost leadership", "Presents a logical and cohesive business report using relevant business terminology and concepts", "Describes the purpose of the chart and issues found", "Recommends global factor/s that the business can use to achieve cost leadership", "Includes features of a business report and uses some business terminology and concepts", "Identifies ONE relevant human resource management process", "Outlines the chart and/or issues found", "Makes statements about global factors and/or cost leadership", "May include some features of a business report and uses some basic business terminology and/or concepts", "Makes some reference to human resources and/or operations", "Uses basic business terminology"],
    criteriaBands: [
      { marks: "17–20", criteria: ["Provides an outline of ONE relevant human resource management process that the business could use", "Comprehensively describes the purpose of the chart and issues found", "Comprehensively recommends appropriate global factors that the business can use to achieve cost leadership", "Presents a sustained, logical and cohesive business report integrating relevant business terminology and concepts"] },
      { marks: "13–16", criteria: ["Provides an outline of ONE relevant human resource management process that the business could use", "Thoroughly describes the purpose of the chart and issues found", "Recommends appropriate global factors that the business can use to achieve cost leadership", "Presents a logical and cohesive business report using relevant business terminology and concepts"] },
      { marks: "9–12", criteria: ["Provides an outline of ONE relevant human resource management process that the business could use", "Describes the purpose of the chart and issues found", "Recommends global factor/s that the business can use to achieve cost leadership", "Includes features of a business report and uses some business terminology and concepts"] },
      { marks: "5–8", criteria: ["Identifies ONE relevant human resource management process", "Outlines the chart and/or issues found", "Makes statements about global factors and/or cost leadership", "May include some features of a business report and uses some basic business terminology and/or concepts"] },
      { marks: "1–4", criteria: ["Makes some reference to human resources and/or operations", "Uses basic business terminology"] },
    ],
    sample: "",
    sampleBlocks: [
      { type: "heading", text: "Answers could include:" },
      { type: "heading", text: "Processes of human resource management" },
      { type: "list", items: ["Acquisition", "Development", "Maintenance", "Separation"] },
      { type: "heading", text: "Operations processes" },
      { type: "list", items: ["Transformation processes", "sequencing and scheduling", "Gantt charts"] },
      { type: "heading", text: "Role of operations management" },
      { type: "list", items: ["Strategic role of operations management – cost leadership"] },
      { type: "heading", text: "Operations strategies" },
      { type: "list", items: ["Global factors – global sourcing, economies of scale, scanning and learning, research and development."] },
    ] },

  { id: "25e26", topic: "marketing", type: "extended", marks: 20, src: "2025 HSC, Section IV, Q26",
    stem: "Explain how target markets affect e-marketing, people, processes and physical evidence.",
    criteria: ["Provides a comprehensive explanation of how target markets affect e-marketing, people, processes and physical evidence", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts", "Provides a sound explanation of how target markets affect e-marketing, people, processes and physical evidence", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts", "Provides some explanation of how target markets affect e-marketing and/or people, processes and physical evidence", "Makes reference to case study/studies and contemporary business issues", "Communicates using business terminology and concepts", "Describes some aspects of target markets and/or e-marketing and/or people, processes and physical evidence", "Makes limited reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and/or concepts", "Makes limited reference to marketing", "May identify case study/studies", "Uses basic business terminology and/or concepts"],
    criteriaBands: [
      { marks: "17–20", criteria: ["Provides a comprehensive explanation of how target markets affect e-marketing, people, processes and physical evidence", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts"] },
      { marks: "13–16", criteria: ["Provides a sound explanation of how target markets affect e-marketing, people, processes and physical evidence", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts"] },
      { marks: "9–12", criteria: ["Provides some explanation of how target markets affect e-marketing and/or people, processes and physical evidence", "Makes reference to case study/studies and contemporary business issues", "Communicates using business terminology and concepts"] },
      { marks: "5–8", criteria: ["Describes some aspects of target markets and/or e-marketing and/or people, processes and physical evidence", "Makes limited reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and/or concepts"] },
      { marks: "1–4", criteria: ["Makes limited reference to marketing", "May identify case study/studies", "Uses basic business terminology and/or concepts"] },
    ],
    sample: "",
    sampleBlocks: [
      { type: "heading", text: "Answers could include:" },
      { type: "heading", text: "Marketing process" },
      { type: "list", items: ["Identifying target markets"] },
      { type: "heading", text: "Marketing strategies" },
      { type: "list", items: ["Market segmentation", "E-marketing", "People, processes and physical evidence"] },
    ] },

  { id: "25e27", topic: "finance", type: "extended", marks: 20, src: "2025 HSC, Section IV, Q27",
    stem: "Explain how financial strategies can achieve liquidity and profitability objectives.",
    criteria: ["Provides a comprehensive explanation of how financial strategies achieve liquidity and profitability objectives", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts", "Provides a sound explanation of how financial strategies achieve liquidity and profitability objectives", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts", "Provides some explanation of how financial strategies achieve liquidity and/or profitability objectives", "Makes reference to case study/studies and contemporary business issues", "Communicates using business terminology and concepts", "Describes some aspects of financial strategies and/or liquidity and/or profitability objectives", "Makes limited reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and/or concepts", "Makes limited reference to finance", "May identify case study/studies", "Uses basic business terminology and/or concepts"],
    criteriaBands: [
      { marks: "17–20", criteria: ["Provides a comprehensive explanation of how financial strategies achieve liquidity and profitability objectives", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response and communicates clearly using relevant business terminology and concepts"] },
      { marks: "13–16", criteria: ["Provides a sound explanation of how financial strategies achieve liquidity and profitability objectives", "Uses relevant case study/studies and contemporary business issues", "Presents a logical and cohesive response using relevant business terminology and concepts"] },
      { marks: "9–12", criteria: ["Provides some explanation of how financial strategies achieve liquidity and/or profitability objectives", "Makes reference to case study/studies and contemporary business issues", "Communicates using business terminology and concepts"] },
      { marks: "5–8", criteria: ["Describes some aspects of financial strategies and/or liquidity and/or profitability objectives", "Makes limited reference to case study/studies and/or contemporary business issues", "Communicates using some business terminology and/or concepts"] },
      { marks: "1–4", criteria: ["Makes limited reference to finance", "May identify case study/studies", "Uses basic business terminology and/or concepts"] },
    ],
    sample: "",
    sampleBlocks: [
      { type: "heading", text: "Answers could include:" },
      { type: "heading", text: "Objectives of financial management" },
      { type: "list", items: ["Liquidity", "Profitability"] },
      { type: "heading", text: "Financial management strategies" },
      { type: "list", items: ["Cash flow management", "cash flow statements", "distribution of payments, discounts for early payment, factoring", "Working capital management", "control of current assets – cash, receivables, inventories", "control of current liabilities – payables, loans, overdrafts", "strategies – leasing, sale and lease back", "Profitability management – cost controls – fixed and variable, cost centres, expense minimisation", "revenue controls – marketing objectives", "Global financial management", "exchange rates", "interest rates", "methods of international payment – payment in advance, letter of credit, clean payment, bill of exchange", "hedging", "derivatives."] },
    ] },

];

export const QUIZ_BANK: Question[] = RAW_QUIZ_BANK.filter(
  (question) => !FORMAT_AUDIT_EXCLUDED_IDS.has(question.id)
);

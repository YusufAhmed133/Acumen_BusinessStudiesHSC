export { TOPICS_MAP } from "./quiz-types";
export type { TopicKey, McqQuestion, ShortQuestion, Question } from "./quiz-types";
import type { Question } from "./quiz-types";

const FORMAT_AUDIT_EXCLUDED_IDS = new Set<string>([]);

const RAW_QUIZ_BANK: Question[] = [

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

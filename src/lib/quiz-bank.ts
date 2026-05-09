export { TOPICS_MAP } from "./quiz-types";
export type { TopicKey, McqQuestion, ShortQuestion, Question } from "./quiz-types";
import type { Question } from "./quiz-types";

export const QUIZ_BANK: Question[] = [

// ─── 2022 Section I ───────────────────────────────────────────────────────────

  { id: "22m1", topic: "marketing", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q1",
    stem: "What is an economic factor that could influence customer choice?",
    options: ["Perception", "Recession", "Regulation", "Subculture"],
    answer: 1, explain: "A recession is an economic factor reducing disposable income. Perception is psychological; regulation is legal; subculture is sociocultural." },

  { id: "22m2", topic: "hr", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q2",
    stem: "Which of the following is a type of voluntary separation in the workplace?",
    options: ["Dismissal", "Layoff", "Resignation", "Retrenchment"],
    answer: 2, explain: "Resignation is the only voluntary separation — the employee chooses to leave. The other three are employer-initiated." },

  { id: "22m3", topic: "marketing", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q3",
    stem: "Which of the following is a pair of primary data collection methods?",
    options: ["Questionnaires and industry reports", "Industry reports and internet sources", "Personal interviews and questionnaires", "Internet sources and personal interviews"],
    answer: 2, explain: "Personal interviews and questionnaires are both primary — collected first-hand. Industry reports and internet sources are secondary data." },

  { id: "22m4", topic: "marketing", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q4",
    stem: "A watch manufacturer uses price-skimming strategies and provides a lifetime warranty on their products. What would most likely have influenced the implementation of these strategies?",
    options: ["Legal compliance", "Quality expectations", "Ethical responsibility", "Cost-based competition"],
    answer: 1, explain: "Quality expectations drive both premium pricing (price skimming) and a lifetime warranty — both signal and guarantee product durability." },

  { id: "22m5", topic: "marketing", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q5",
    stem: "The characteristics of lifestyle, motivation and personality are most often used in which market segmentation strategy?",
    options: ["Behavioural", "Demographic", "Geographic", "Psychographic"],
    answer: 3, explain: "Psychographic segmentation divides by psychological traits — lifestyle, values, personality, and motivation. Demographic uses age/income; geographic uses location." },

  { id: "22m6", topic: "hr", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q6",
    stem: "All staff in a business participate equally in a profit-sharing scheme. Which row of the table correctly identifies this reward strategy?",
    options: ["Monetary / Group", "Monetary / Individual", "Non-monetary / Group", "Non-monetary / Individual"],
    answer: 0, explain: "Profit-sharing is a monetary (cash/financial) reward distributed equally across all staff, making it a group reward, not tied to individual performance." },

  { id: "22m7", topic: "operations", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q7",
    stem: "A large clothing manufacturer in NSW wants to reduce input costs. Which strategy would achieve this objective?",
    options: ["Increasing product variety", "Increasing employee training", "Implementing global sourcing", "Implementing sustainable packaging"],
    answer: 2, explain: "Global sourcing accesses lower-cost inputs from international suppliers, directly reducing input costs. Training and variety increase costs; sustainable packaging may raise them." },

  { id: "22m8", topic: "hr", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q8",
    stem: "A business has implemented a training program in the use of new machinery on the factory floor for its employees. What is the main reason for this training program?",
    options: ["To prevent accidents", "To reduce absenteeism", "To reduce staff turnover", "To improve corporate culture"],
    answer: 0, explain: "WH&S obligations require training employees in safe use of machinery. The primary reason for machinery-specific training is accident prevention — satisfying the legal duty of care." },

  { id: "22m9", topic: "hr", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q9",
    stem: "An employee has been bullied at work and has lodged a complaint. What initial action should the employer take to resolve this dispute?",
    options: ["Arbitration", "Conciliation", "Mediation", "Negotiation"],
    answer: 3, explain: "Negotiation is the first, least formal step — the parties attempt direct resolution. Mediation, conciliation, and arbitration involve third parties and escalate in formality." },

  { id: "22m10", topic: "operations", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q10",
    stem: "A printing business uses chemicals in its production process. Which of the following factors has a legal regulation that affects the operations management of this business?",
    options: ["Superannuation", "Code of conduct", "Union membership", "Environmental protection"],
    answer: 3, explain: "Environmental protection laws regulate chemical waste disposal and directly affect operations. Superannuation and union membership are HR/legal matters; codes of conduct are internal ethical frameworks." },

  { id: "22m12", topic: "operations", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q12",
    stem: "Which of the following is an example of service differentiation?",
    options: ["A car manufacturer supplies cars with premium tinted windows.", "A chemist issues a patient with medication in exchange for a script.", "A shoe store assistant spends varying amounts of time with customers.", "A salesperson provides a receipt to a customer who has purchased a bed."],
    answer: 2, explain: "Service differentiation means varying the service experience. Spending varying time with different customers adapts the service to individual needs. The other options are standard goods transactions." },

  { id: "22m13", topic: "marketing", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q13",
    stem: "Which combination of global market influences would support a business's decision to expand globally?",
    options: ["A depressed economic outlook and low interest rates", "A depressed economic outlook and high interest rates", "An improved economic outlook and low interest rates", "An improved economic outlook and high interest rates"],
    answer: 2, explain: "An improved economic outlook boosts consumer spending (demand for exports) and low interest rates reduce borrowing costs for expansion — both conditions support global expansion." },

  { id: "22m14", topic: "finance", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q14",
    stem: "A private investment company accepts money from clients. The owner illegally uses this money for their own personal use. Which government body would take legal action against the owner of this company?",
    options: ["Australian Taxation Office", "Australian Securities Exchange", "Australian Prudential Regulation Authority", "Australian Securities and Investments Commission"],
    answer: 3, explain: "ASIC regulates investment companies and enforces laws against financial fraud such as misappropriation of client funds. APRA regulates banks/insurance; ASX operates the stock exchange." },

  { id: "22m15", topic: "marketing", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q15",
    stem: "Heidi has a small farm that has a variety of animals, including chickens. She would like to sell the excess chicken eggs to customers. Which distribution method would best support her situation?",
    options: ["Producer → consumer", "Producer → retailer → consumer", "Producer → wholesaler → consumer", "Producer → agent → retailer → consumer"],
    answer: 0, explain: "A small farm selling directly to local customers uses the shortest channel. Longer channels involve intermediaries that take margin and are unsuitable for small-scale perishable items." },

  { id: "22m16", topic: "marketing", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q16",
    stem: "Which of the following could be a disadvantage of using a price penetration strategy for a business?",
    options: ["A large number of products are sold quickly", "The business has problems in trying to raise prices later", "New competitors find it more difficult to enter the market", "Customers are discouraged from purchasing the product immediately"],
    answer: 1, explain: "Price penetration attracts price-sensitive customers at a low price; raising prices later risks losing those customers. The other options describe advantages or characterise price skimming." },

  { id: "22m17", topic: "marketing", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q17",
    stem: "A florist purchases flowers to create flower arrangements. What type of market does the florist operate in?",
    options: ["Consumer", "Industrial", "Mass", "Resource"],
    answer: 1, explain: "The florist buys flowers as inputs for their business product — this is a business-to-business (industrial) market. Consumer markets sell to individuals for personal use." },

  { id: "22m18", topic: "finance", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q18",
    stem: "A business owns a $2 million building with a $500 000 mortgage. They decide to sell the building and lease it back from the new owners over five years. What is the likely purpose of this financial strategy?",
    options: ["Reduce liquidity", "Reduce cash flow", "Improve profitability", "Improve working capital"],
    answer: 3, explain: "Sale and lease-back converts a fixed asset into cash, immediately improving working capital. It generates a cash inflow (not reduces it) and does not directly increase profitability." },

  { id: "22m19", topic: "operations", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q19",
    stem: "A large cake business is going to offer a contract to another business to make their cake decorations. Which business functions would provide input into the contract details?",
    options: ["Finance, operations and marketing", "Finance, marketing and human resources", "Operations, human resources and finance", "Operations, marketing and human resources"],
    answer: 2, explain: "Outsourcing a production input involves: operations (specifications/quality), finance (cost/payment terms), and HR (workforce implications). Marketing is not directly involved in a supplier contract." },

  { id: "22m20", topic: "finance", type: "mcq", marks: 1, src: "2022 HSC , Section I , Q20",
    stem: "A business provides the following financial information. Year 1 ($): Sales 600 000 / Cost of goods sold 200 000 / Gross profit ? / Expenses 250 000 / Net profit ?. Year 2 ($): Sales 700 000 / Cost of goods sold 200 000 / Gross profit ? / Expenses 200 000 / Net profit ?. Other financial information: Owner's equity – $500 000 (return on owner's equity: net profit ÷ owner's equity) / Gross profit ratio (industry average) – 78% (gross profit ratio: gross ÷ sales). Which of the following reflects the changes to profitability in Year 2?",
    options: ["Return on owner's equity has improved and the gross profit ratio is worse than the industry average", "Return on owner's equity has worsened and the gross profit ratio is worse than the industry average", "Return on owner's equity has improved and the gross profit ratio is better than the industry average", "Return on owner's equity has worsened and the gross profit ratio is better than the industry average"],
    answer: 0, explain: "Year 1: ROE = $150k/$500k = 30%, GPR = 66.7%. Year 2: ROE = $300k/$500k = 60%, GPR = 71.4%. ROE improved; GPR of 71.4% is still below the 78% industry average." },

// ─── 2022 Section II ──────────────────────────────────────────────────────────

  { id: "22s21a", topic: "operations", type: "short", marks: 2, src: "2022 HSC , Section II , Q21(a)",
    stem: "Michael would like to open a new burger restaurant. Outline a performance objective relevant to this business.",
    criteria: ["Sketches in general terms a performance objective relevant to the business", "Identifies an objective for this business"],
    sample: "Dependability would be a key performance objective for this business as customers expect consistency. They want their burgers to be served in the same timeframe, be the same size, temperature and taste each time they purchase one." },

  { id: "22s21b", topic: "operations", type: "short", marks: 3, src: "2022 HSC , Section II , Q21(b)",
    stem: "Michael would like to open a new burger restaurant. Recommend an appropriate inventory management strategy for this business.",
    criteria: ["Provides reasons in favour of an appropriate inventory management strategy for the business", "Provides a reason in favour of an appropriate inventory management strategy for the business", "Makes a relevant statement about inventory management"],
    sample: "Just-in-time would be an effective inventory method as it would allow the business to take advantage of fresh produce as it arrives. This would also save them storage space and the costs associated with this." },

  { id: "22s21c", topic: "operations", type: "short", marks: 4, src: "2022 HSC , Section II , Q21(c)",
    stem: "Michael is considering which process layout would be the most efficient for this restaurant. Process layout option 1: [Stove / Raw meat refrigerator / Finished burgers across the top; Burger assembly station on the left side; Seating area / Cash registers / Entrance]. Process layout option 2: [Stove / Burger assembly station / Finished burgers in a sequential line across the top; Raw meat refrigerator on the left; Seating area (smaller) / Cash registers / Entrance]. Compare each layout in terms of efficiency and profitability.",
    criteria: ["Provides detailed similarities and/or differences about the efficiency and profitability of each layout", "Provides some similarities and/or differences about efficiency and profitability of each layout", "Provides similarities and/or differences about efficiency and/or profitability of the layouts", "Provides relevant information about process layout"],
    sample: "The layout of option 2 allows employees to make a finished burger efficiently as the process to make burgers is sequential. In comparison, option 1's narrow kitchen layout requires employees to go back and forth between work stations to make the burger which could lead to accidents and time lost, causing it to be more inefficient. Option 1 has more tables which could seat more customers and therefore increase profitability compared to option 2 which has fewer tables for dine-in customers, therefore it is unable to maximise profitability." },

  { id: "22s22a", topic: "hr", type: "short", marks: 2, src: "2022 HSC , Section II , Q22(a)",
    stem: "Outline how an increase in the minimum wage rate could affect business.",
    criteria: ["Sketches in general terms the effect an increase in the minimum wage has on business", "Makes a general statement about minimum wage"],
    sample: "An increase in the minimum wage is likely to increase on-costs for businesses. This may lead to businesses passing these costs on to consumers or it may reduce profitability as business expenses rise." },

  { id: "22s22b", topic: "hr", type: "short", marks: 3, src: "2022 HSC , Section II , Q22(b)",
    stem: "Outline how the minimum employment standards protect employees in Australia. Use examples in your answer.",
    criteria: ["Sketches in general terms how minimum employment standards protect employees using examples", "Sketches in general terms how minimum employment standards protect employees and may provide example(s)", "Makes a relevant statement about minimum employment standards"],
    sample: "Minimum employment standards include eleven legally mandated standards that provide basic protections for all employees. The minimum standards outline basic employee rights in the workplace, regardless of the type of employment contract. For example, all full-time workers are provided with the right to four weeks annual leave and a paid day off on public holidays." },

  { id: "22s22c", topic: "hr", type: "short", marks: 3, src: "2022 HSC , Section II , Q22(c)",
    stem: "How are performance appraisals of employees beneficial to employers?",
    criteria: ["Provides the ways performance appraisals are beneficial to employers", "Provides a way performance appraisals are beneficial to employers", "Makes a relevant statement about performance appraisals"],
    sample: "Performance appraisals can be developmental or administrative. They allow employers to provide feedback to employees about their performance and can be used to identify their training and development needs. They can also be used to reward and incentivise employees for high performance." },

  { id: "22s22d", topic: "hr", type: "short", marks: 3, src: "2022 HSC , Section II , Q22(d)",
    stem: "Explain the importance of carrying out an induction program for new employees.",
    criteria: ["Provides why and/or how an induction program for new employees is important", "Provides characteristics and features of the induction process for new employees", "Makes a relevant statement about induction"],
    sample: "The induction process introduces new employees to the workplace. Induction can enhance employee understanding of workplace culture, policies and procedures, allowing them to make a significant contribution to the business from the outset of their employment enhancing employee competence, providing a positive attitude to the job and the business." },

  { id: "22s23a", topic: "finance", type: "short", marks: 1, src: "2022 HSC , Section II , Q23(a)",
    stem: "A gifts and homewares business sells goods such as candles, bags, cushions, soaps and jewellery. They have provided the following financial information: Operating income (revenue) $1 500 000 / Gross profit $1 100 000 / Expenses $600 000 / Total liabilities $2 000 000 / Net profit $500 000 / Owner's equity $1 800 000. Calculate the efficiency (total expenses ÷ total sales) of this business.",
    criteria: ["Calculates efficiency correctly and shows working"],
    sample: "Total expenses ÷ total sales = $600 000 ÷ $1 500 000 = 40% (or 0.4 : 1)" },

  { id: "22s23b", topic: "finance", type: "short", marks: 3, src: "2022 HSC , Section II , Q23(b)",
    stem: "A gifts and homewares business sells goods such as candles, bags, cushions, soaps and jewellery (Expenses $600 000 / Sales $1 500 000). Explain how the expense ratio can help this business determine their efficiency.",
    criteria: ["Provides detailed explanation of how expense ratio determines efficiency for this business", "Provides some explanation linking expense ratio to efficiency", "Makes a relevant statement about expense ratio or efficiency"],
    sample: "Efficiency is a measure of the ability of a business to use its resources effectively. The gifts and homewares business are currently spending $0.40 in expenses for every $1 of sales. The lower this expense ratio is, the more efficient the business is. If this business can reduce their indirect costs and maintain or increase sales, they demonstrate that they are able to use resources effectively and improve their profitability." },

  { id: "22s23c", topic: "finance", type: "short", marks: 3, src: "2022 HSC , Section II , Q23(c)",
    stem: "A gifts and homewares business (Net profit $500 000 / Owner's equity $1 800 000 / Total liabilities $2 000 000). The family-owned business is considering expansion by opening two new stores. Their bank has given approval to borrow $3 000 000 at 4% interest to finance their expansion. Why is the level of gearing an important consideration for the lender to this business?",
    criteria: ["Provides detailed explanation of why gearing is important for the lender", "Provides some explanation of gearing and its relationship to lending risk", "Makes a relevant statement about gearing"],
    sample: "Gearing refers to the ability of a business to meet its financial obligations in the longer term. It can help the lender to this business understand their risk and determine the ability of the business to meet its loan repayments, helping them decide whether to lend the business money, or not. In this case the business gearing would indicate they can repay their debt." },

  { id: "22s23d", topic: "finance", type: "short", marks: 4, src: "2022 HSC , Section II , Q23(d)",
    stem: "A gifts and homewares business (Net profit $500 000 / Owner's equity $1 800 000 / Total liabilities $2 000 000). The family-owned business is considering expansion by opening two new stores, borrowing $3 000 000 at 4% interest. Using the financial information provided, explain why the business should use debt finance to acquire the two new stores.",
    criteria: ["Provides detailed explanation referencing data from the financial information", "Provides some explanation of why debt finance is appropriate for this business", "Makes a relevant statement about debt finance", "Provides some relevant information"],
    sample: "The gifts and homewares business should use debt finance to purchase their new stores because of the relatively low interest rate of 4% they can access. Currently with a $500 000 net profit and potential for this to increase due to the new stores they will be able to meet their increased debt obligations. Debt finance also allows the business to access the money relatively quickly and as the borrowed money is forecast to create increased profits, it seems like an appropriate decision. Additionally, there is no loss of ownership in the family-owned business." },

  { id: "22s24a", topic: "marketing", type: "short", marks: 2, src: "2022 HSC , Section II , Q24(a)",
    stem: "A business wishes to introduce new products into the market. Outline ONE promotion strategy this business could use to launch the new product range.",
    criteria: ["Outlines a suitable promotion strategy and explains how it would launch the product", "Makes a relevant statement about promotion"],
    sample: "The business could use advertising via television or social media to launch their new product range. This would alert potential customers to their new products using different media." },

  { id: "22s24b", topic: "marketing", type: "short", marks: 3, src: "2022 HSC , Section II , Q24(b)",
    stem: "A business wishes to introduce new products into the market. How will the business know that their marketing plan has been successful for a new product range?",
    criteria: ["Provides detailed explanation of how the business can evaluate marketing plan success", "Provides some explanation of monitoring and controlling the marketing plan", "Makes a relevant statement about evaluating a marketing plan"],
    sample: "In the marketing plan, the business would have developed a financial forecast that included the cost and potential sales of the new product range. The business could monitor and control the marketing plan, comparing actual with planned results in terms of sales and market share to determine the success of their new product range." },

  { id: "22s24c", topic: "marketing", type: "short", marks: 4, src: "2022 HSC , Section II , Q24(c)",
    stem: "A business wishes to introduce new products into the market. Why should this business adopt a marketing approach instead of a selling approach?",
    criteria: ["Provides detailed explanation of why marketing approach is superior to selling approach for this business", "Provides some comparison of marketing and selling approaches", "Makes a relevant statement about marketing or selling approaches", "Provides some relevant information"],
    sample: "The business should adopt the marketing approach instead of the selling approach as the selling approach is focused mostly on selling due to increased competition and it often neglects the needs of the customer. By using the marketing approach the business can find out what the customer wants and can satisfy their needs. This is usually achieved through market research and finding out customer needs and wants prior to introducing new products into a market." },

// ─── 2022 Section III/IV ──────────────────────────────────────────────────────

  { id: "22e25", topic: "marketing", type: "extended", marks: 20, src: "2022 HSC , Section III , Q25",
    stem: "Bee Sticky Pty Ltd is an established Australian manufacturing business that produces a wide range of high quality and premium organic honey products. It is expanding into global markets. It will lease warehouses in Malaysia and the USA. SWOT: Strengths — High quality, premium and organic honey products; Approved for consumption and medical uses; Made by honeybees from Australian flora. Weaknesses — Frequent breakage of product during transportation; Lack of experience in foreign payment systems. Opportunities — Expanding market for high quality honey products in countries overseas; Falling bee populations in countries overseas; Potential collaborations with up-market restaurants/chefs. Threats — Established competition in foreign markets; Fluctuations in the Australian dollar. You have been hired as a consultant by Bee Sticky Pty Ltd to write a business report. In your report: describe branding and product strategies the business could use to expand into global markets / recommend a channel choice that would suit this business's expansion / analyse the global financial management strategies required for a successful expansion.",
    criteria: ["Describes branding and product strategies appropriate to global expansion (e.g. packaging for transport, global branding)", "Recommends a suitable channel choice with justification (e.g. agent/distributor given lack of foreign experience)", "Analyses global financial management strategies (exchange rates, hedging, derivatives, methods of payment)", "Makes effective use of the SWOT stimulus material", "Presents a sustained, logical and cohesive business report using relevant terminology"],
    sample: "Bee Sticky should develop strong global branding that emphasises its premium Australian origin and organic credentials, with redesigned packaging to reduce breakage during international transport. A channel using agents or distributors in Malaysia and the USA is recommended, as this mitigates the weakness of limited experience in foreign markets — agents understand local regulations and payment systems. For financial management, the business should hedge against AUD fluctuations using forward contracts or derivatives to lock in exchange rates and protect revenue. Payment in advance or letters of credit should be used until foreign buyer relationships are established, given the weakness identified in unfamiliar foreign payment systems." },

  { id: "22e26", topic: "hr", type: "extended", marks: 20, src: "2022 HSC , Section IV , Q26",
    stem: "Explain the importance to a business of having human resources strategies that reduce workplace disputes and increase worker satisfaction.",
    criteria: ["Explains strategies that reduce workplace disputes (e.g. negotiation, mediation, FWC processes, grievance procedures)", "Explains strategies that increase worker satisfaction (e.g. rewards, development, flexible conditions, leadership)", "Links HR strategies to business outcomes (productivity, retention, cost reduction)", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response using relevant business terminology"],
    sample: "Human resource strategies that reduce disputes — such as clear grievance procedures, negotiation processes, and fostering positive relations through consultation — prevent costly industrial action and legal proceedings. Strategies increasing worker satisfaction, including competitive monetary rewards, career development opportunities, and flexible working conditions, directly reduce staff turnover and absenteeism. Together, these approaches improve workforce productivity and lower recruitment and training costs. Businesses that proactively manage HR relationships are better positioned to attract and retain skilled employees, contributing to long-term competitive advantage." },

  { id: "22e27", topic: "operations", type: "extended", marks: 20, src: "2022 HSC , Section IV , Q27",
    stem: "Explain the importance to a business of having operations processes that can maintain a competitive advantage.",
    criteria: ["Explains specific operations processes (transformation process, quality management, technology, inventory management)", "Links operations processes to performance objectives (cost, quality, speed, flexibility, dependability, customisation)", "Explains how these processes sustain competitive advantage against rivals", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response using relevant business terminology"],
    sample: "Operations processes such as lean manufacturing, quality management systems, and advanced technology implementation directly reduce costs and improve output quality — key sources of competitive advantage. Businesses that achieve high dependability (consistent delivery) and flexibility (rapid response to demand changes) outperform rivals in customer satisfaction. Continuous improvement strategies like TQM and kaizen ensure processes evolve, preventing competitors from eroding the advantage. Supply chain development and global sourcing further reduce input costs. Collectively, superior operations processes enable a business to deliver greater value at lower cost, which is the foundation of sustained competitive advantage." },

// ─── 2023 Section I ───────────────────────────────────────────────────────────

  { id: "23m1", topic: "hr", type: "mcq", marks: 1, src: "2023 HSC , Section I , Q1",
    stem: "Businesses offer employees rewards in order to",
    options: ["prevent the possibility of industrial action.", "recognise the value of their effort to the business.", "fulfil federal government legislation requirements.", "provide employees with an income to meet the costs of living."],
    answer: 1, explain: "The primary purpose of rewards in HRM is to recognise and incentivise employee contribution, motivating performance and building satisfaction." },

  { id: "23m2", topic: "operations", type: "mcq", marks: 1, src: "2023 HSC , Section I , Q2",
    stem: "A florist designs floral displays for weddings to suit the colour preferences of individual couples. Which of the following would be the main performance objective being targeted by this florist?",
    options: ["Customisation", "Flexibility", "Quality", "Speed"],
    answer: 0, explain: "Customisation means tailoring products to individual specifications. Designing to each couple's colour preferences is customisation. Flexibility refers to adapting to volume changes, not individual tailoring." },

  { id: "23m3", topic: "marketing", type: "mcq", marks: 1, src: "2023 HSC , Section I , Q3",
    stem: "Which of the following best illustrates relationship marketing?",
    options: ["Creating long-term customer loyalty", "Distributing goods directly to customers", "Using promotions to increase customer sales", "Basing the marketing mix on customer feedback"],
    answer: 0, explain: "Relationship marketing focuses on building ongoing loyal customer relationships rather than one-off transactions. Creating long-term loyalty is its defining outcome." },

  { id: "23m4", topic: "hr", type: "mcq", marks: 1, src: "2023 HSC , Section I , Q4",
    stem: "An employee receives an electrical burn while working. The employee requires hospital treatment and is unable to return to work for three months. As a result of this injury, what support is this employee entitled to?",
    options: ["Mediation", "Payment in advance", "Workers compensation", "Training and development"],
    answer: 2, explain: "Workers compensation provides wage replacement and medical costs for employees injured at work — a legal entitlement under WH&S legislation." },

  { id: "23m5", topic: "marketing", type: "mcq", marks: 1, src: "2023 HSC , Section I , Q5",
    stem: "A business wants to quickly achieve a large market share for a product. Which marketing strategy would most likely be used?",
    options: ["Branding", "Skimming", "Penetration", "Price points"],
    answer: 2, explain: "Price penetration uses a low entry price to rapidly capture market share by attracting price-sensitive customers. Skimming targets early adopters with a high price, growing share slowly." },

  { id: "23m6", topic: "hr", type: "mcq", marks: 1, src: "2023 HSC , Section I , Q6",
    stem: "A mattress manufacturer reduced the working hours of its factory workers due to a decrease in demand. Which influence on human resources is most likely to have led to this?",
    options: ["Economic", "Legal", "Operations", "Social"],
    answer: 0, explain: "A decrease in demand is an economic influence — the economic cycle affects business output and therefore staffing needs directly." },

  { id: "23m7", topic: "marketing", type: "mcq", marks: 1, src: "2023 HSC , Section I , Q7",
    stem: "Which of the following shows the correct order of the steps in a marketing plan?",
    options: ["Market research, establishing market objectives, identifying target markets, situational analysis", "Establishing market objectives, identifying target markets, situational analysis, market research", "Identifying target markets, situational analysis, market research, establishing market objectives", "Situational analysis, market research, establishing market objectives, identifying target markets"],
    answer: 3, explain: "The correct marketing planning order: (1) situational analysis (SWOT), (2) market research, (3) establish objectives, (4) identify target markets. The process begins with understanding the current situation." },

  { id: "23m8", topic: "finance", type: "mcq", marks: 1, src: "2023 HSC , Section I , Q8",
    stem: "An export company based in Sydney sells Australian-made art to the Asian market. Which form of payment has the lowest level of risk for the exporter?",
    options: ["Clean payment", "Letter of credit", "Bill of exchange", "Payment in advance"],
    answer: 3, explain: "Payment in advance means the buyer pays before receiving goods — the exporter receives funds before shipping, eliminating non-payment risk. Clean payment (open account) carries the highest exporter risk." },

  { id: "23m9", topic: "operations", type: "mcq", marks: 1, src: "2023 HSC , Section I , Q9",
    stem: "The training of staff in the manufacturing process is an example of interdependence between which of the following business functions?",
    options: ["Finance and marketing", "Marketing and operations", "Finance and human resources", "Operations and human resources"],
    answer: 3, explain: "Training staff in manufacturing processes involves operations (the process to be learned) and human resources (who manages training and development programs)." },

  { id: "23m10", topic: "marketing", type: "mcq", marks: 1, src: "2023 HSC , Section I , Q10",
    stem: "An energy drink business uses a celebrity to promote its products online. Which marketing strategy is being used?",
    options: ["Loss leaders", "Opinion leaders", "Personal selling", "Sales promotion"],
    answer: 1, explain: "Using a celebrity to promote products is opinion leader marketing — leveraging the celebrity's influence and credibility with their audience." },

  { id: "23m11", topic: "hr", type: "mcq", marks: 1, src: "2023 HSC , Section I , Q11",
    stem: "Which of the following is involved in making workplace agreements and resolving workplace disputes?",
    options: ["Fair Work Commission", "Australian Human Rights Commission", "Australian Securities and Investments Commission", "Australian Competition and Consumer Commission"],
    answer: 0, explain: "The Fair Work Commission is Australia's national workplace tribunal that approves enterprise agreements and resolves disputes. AHRC handles human rights/discrimination; ASIC regulates financial services." },

  { id: "23m12", topic: "finance", type: "mcq", marks: 1, src: "2023 HSC , Section I , Q12",
    stem: "An Australian theme park wants to implement a new point-of-sale system that allows improved tracking of stock levels. The system will cost $185 000 to establish. Which long-term source of finance would be most appropriate for this system?",
    options: ["Derivatives", "Hedging", "Leasing", "Overdraft"],
    answer: 2, explain: "Leasing allows the business to use the equipment without a large upfront capital outlay. Derivatives and hedging are risk management tools, not sources of finance. An overdraft is short-term and unsuitable for $185 000 capital investment." },

  { id: "23m13", topic: "marketing", type: "mcq", marks: 1, src: "2023 HSC , Section I , Q13",
    stem: "A customer returns a recently purchased 5G mobile phone to the place of purchase as the phone was faulty. Under consumer law, why must the business refund the customer the cost of the mobile phone?",
    options: ["It is ethical to replace defective goods.", "It is within the implied conditions of the contract.", "It is important to meet corporate social responsibility.", "It can be considered deceptive and misleading advertising."],
    answer: 1, explain: "Consumer law implies that goods must be of acceptable quality. A faulty phone breaches this implied condition, entitling the buyer to a remedy — a legal obligation, not merely ethical." },

  { id: "23m14", topic: "finance", type: "mcq", marks: 1, src: "2023 HSC , Section I , Q14",
    stem: "The Australian dollar increases from 0.50 to 0.70 USD. What impact would this have on the goods imported to Australia and the goods exported to the United States? [Table — Imports / Exports]",
    options: ["More expensive / More expensive", "Less expensive / More expensive", "Less expensive / Less expensive", "More expensive / Less expensive"],
    answer: 1, explain: "A stronger AUD makes imports cheaper (more AUD buys more foreign goods) but makes exports more expensive for US buyers (they need more USD to buy AUD-priced goods)." },

  { id: "23m15", topic: "operations", type: "mcq", marks: 1, src: "2023 HSC , Section I , Q15",
    stem: "A large construction company has decided to focus their operations on design and innovation. Which of the following best describes this operations management strategy?",
    options: ["Outsourcing", "Cost leadership", "Supply chain development", "Goods/services differentiation"],
    answer: 3, explain: "Focusing on design and innovation to create unique output is goods/services differentiation — competing by being distinctive rather than cheapest." },

  { id: "23m16", topic: "finance", type: "mcq", marks: 1, src: "2023 HSC , Section I , Q16",
    stem: "The table shows extracts from the financial statements of a business for 2022. Sales $300 000 / Cost of goods sold $200 000 / Gross profit $100 000 / Expenses $40 000. What is the net profit ratio for this business in 2022? (Net profit ratio = net profit ÷ sales)",
    options: ["13%", "20%", "53%", "150%"],
    answer: 1, explain: "Net profit = GP – Expenses = $100,000 – $40,000 = $60,000. Net profit ratio = $60,000 ÷ $300,000 = 20%." },

  { id: "23m17", topic: "operations", type: "mcq", marks: 1, src: "2023 HSC , Section I , Q17",
    stem: "Refer to the following diagram to answer Questions 17–18. A critical path analysis is shown for a job. [Diagram: A→B (6 days)→C (3 days)→D (3 days); B→E (5 days)→C; B→F (7 days)→C (6 days)] Which tasks could be occurring at the same time?",
    options: ["AB, BC and CD", "AB, BF and FC", "BE, BF and BC", "BE, BF and EC"],
    answer: 2, explain: "After task AB is complete, tasks BE, BF, and BC can all start simultaneously from node B — they all only require A→B to be finished, with no dependency on each other." },

  { id: "23m18", topic: "operations", type: "mcq", marks: 1, src: "2023 HSC , Section I , Q18",
    stem: "Task EC is delayed and takes an additional 7 days. By how many days will the length of the critical path change?",
    options: ["0 days", "2 days", "4 days", "6 days"],
    answer: 1, explain: "Original critical path AB+BF+FC+CD = 6+7+6+3 = 22 days. With EC delayed by 7: path AB+BE+EC+CD = 6+5+10+3 = 24 days. New critical path = 24 days. Change = 2 days." },

  { id: "23m19", topic: "hr", type: "mcq", marks: 1, src: "2023 HSC , Section I , Q19",
    stem: "Which of the following stakeholders has the power to implement workplace reforms to support employees of various abilities, ages and genders?",
    options: ["Unions", "Society", "Employer associations", "Government organisations"],
    answer: 3, explain: "Government organisations legislate workplace reform — equal employment opportunity, anti-discrimination, and accessibility laws are passed and enforced by government." },

// ─── 2023 Section II ──────────────────────────────────────────────────────────

  { id: "23s21a", topic: "operations", type: "short", marks: 2, src: "2023 HSC , Section II , Q21(a)",
    stem: "An Australian tyre manufacturer is expanding its business. In order to reduce operating costs and increase sales and profit, rubber will be sourced from the global market. The business wants to maintain quality outputs and achieve economies of scale. Outline ONE potential issue this business could face in relation to both cost and quality of outputs.",
    criteria: ["Outlines a potential issue relating to both cost and quality of outputs", "Makes a relevant statement about cost and/or quality"],
    sample: "The business can reduce the costs of inputs when they source globally, cheaper inputs such as rubber, may result in lower quality tyres." },

  { id: "23s21b", topic: "operations", type: "short", marks: 3, src: "2023 HSC , Section II , Q21(b)",
    stem: "An Australian tyre manufacturer wants to achieve economies of scale through global rubber sourcing. Explain the benefits of achieving economies of scale for both the business and consumers.",
    criteria: ["Explains benefits of economies of scale for both the business and consumers", "Demonstrates some understanding of economies of scale for business or consumers", "Makes a relevant statement about economies of scale"],
    sample: "Economies of scale will provide this business with cost advantages by increasing the volume of its production, allowing the business to lower the price of the finished product. Consumers will benefit from the reduced price and the business will then increase sales and profits in the long term." },

  { id: "23s21c", topic: "operations", type: "short", marks: 5, src: "2023 HSC , Section II , Q21(c)",
    stem: "The owners of the tyre manufacturing business have purchased leading-edge technology to help achieve economies of scale. Explain why both staff and management might be resistant to this change.",
    criteria: ["Explains why staff might be resistant to the new technology", "Explains why management might be resistant to the new technology", "Provides specific reasons (e.g. retraining costs, fear of job loss, financial outlay)", "Demonstrates some understanding of resistance to change", "Makes a relevant statement about resistance to change"],
    sample: "The leading-edge technology purchased would be costly for management. The new technology may also require staff and management to be retrained. This can be expensive for management and staff may be resistant to learning new techniques due to fear or inertia. Fear of job loss may cause resistance to change as staff may feel that processes may become automated and their jobs may become redundant. This also imposes extra costs to the business." },

  { id: "23s22a", topic: "hr", type: "short", marks: 2, src: "2023 HSC , Section II , Q22(a)",
    stem: "What is the purpose of Equal Employment Opportunity (EEO) legislation?",
    criteria: ["Explains the purpose of EEO legislation", "Makes a relevant statement about EEO"],
    sample: "It ensures that the best qualified person for the job gets the position and that employers don't hire or reject candidates based on factors such as culture, ethnicity, gender, age etc." },

  { id: "23s22b", topic: "hr", type: "short", marks: 3, src: "2023 HSC , Section II , Q22(b)",
    stem: "The advertisement for a store manager is shown. [Teddy Bear Store — Est. 1990. Teddy Bear Store aims to bring joy to children. We are looking for a Store Manager. If you are interested, please contact us. Role: Manage a team of 8 staff members / Manage day-to-day operations. Responsibilities: Organise inventory / Train staff / Assist customers. General information: $65 000 salary / Union membership not permitted / No superannuation included.] Outline TWO human resource issues found in this advertisement.",
    criteria: ["Identifies and explains two HR issues in the advertisement", "Identifies and explains one HR issue accurately", "Identifies a relevant issue", "Makes a relevant statement"],
    sample: "Superannuation is a legal requirement that all employees are entitled to under Minimum Standards. Under the Fair Work Act (2009) it is illegal to prohibit union membership in Australia. This business has breached these two requirements in their advertisement." },

  { id: "23s22c", topic: "hr", type: "short", marks: 5, src: "2023 HSC , Section II , Q22(c)",
    stem: "The table shows labour force participation rates for males and females in Australia, 1981–2021. [1981: Males 78%, Females 44%; 2001: Males 73%, Females 55%; 2021: Males 71%, Females 62%] Explain the social influences that have contributed to the changing labour force participation rates in the period 1981–2021.",
    criteria: ["Explains social influences with reference to the data from the table", "Identifies specific social changes (e.g. changing gender roles, higher education participation)", "Links social influences to the trends shown for both males and females", "Demonstrates sound understanding of social influences on labour force participation", "Makes a relevant statement about social influences or the data"],
    sample: "As shown in the table, the labour participation rate for females has significantly increased from 44% in 1981 to 62% in 2021 compared to the participation rate for males which has decreased from 78% in 1981 to 71% in 2021. This is due to a number of reasons such as changing gender roles, eg changes in society which supports the increasing participation of women in the workforce and an increase in the acceptance/participation of males in child-rearing duties. This change in social norms has also normalised the completion of higher education for females which has subsequently led to increased employment opportunities." },

  { id: "23s23a", topic: "marketing", type: "short", marks: 2, src: "2023 HSC , Section II , Q23(a)",
    stem: "A cereal manufacturer has decided to change the packaging of its product in an attempt to reverse a drop in sales and remain competitive with existing businesses. It is also considering growing its target market by catering for health-conscious consumers in Australia and eventually expanding into the global market. Outline the current product life cycle stage of this cereal.",
    criteria: ["Correctly identifies the product life cycle stage (decline) with justification", "Makes a relevant statement about the product life cycle"],
    sample: "The cereal manufacturer is in the decline stage of the product life cycle. This is the result of dropping sales and the manufacturer is hoping to renew consumer interest by changing the packaging of its product." },

  { id: "23s23b", topic: "marketing", type: "short", marks: 3, src: "2023 HSC , Section II , Q23(b)",
    stem: "A cereal manufacturer in decline is considering catering for health-conscious consumers in Australia and eventually expanding into the global market. How could a niche market approach increase sales for this cereal manufacturer?",
    criteria: ["Explains how a niche market approach could increase sales for this business", "Demonstrates some understanding of niche market and its effect on sales", "Makes a relevant statement about niche market"],
    sample: "A niche market approach would allow the manufacturer to meet the needs of health-conscious customers by offering them a healthy range of cereals such as low sugar or sugar-free cereals. This targeted approach would allow the manufacturer to increase their sales by differentiating their product against competitors, achieve repeat sales and create customer loyalty." },

  { id: "23s23c", topic: "marketing", type: "short", marks: 5, src: "2023 HSC , Section II , Q23(c)",
    stem: "A cereal manufacturer is considering expanding into the global market, targeting health-conscious consumers. Justify ONE global marketing strategy this cereal manufacturer could use to expand into the global market.",
    criteria: ["Names and defines one global marketing strategy (e.g. customisation or standardisation)", "Justifies how the strategy suits this specific cereal manufacturer", "Explains outcomes for the business in global markets", "Demonstrates sound understanding of the strategy's application", "Makes a relevant statement about global marketing"],
    sample: "Customisation is a global marketing strategy whereby a business tailors the marketing mix for a product sold around the world to individual markets. Customisation of packaging by changing the language used on the cereal box also allows a wider range of consumers globally to understand the features of the cereal that they are eating. Customisation is therefore recommended for this cereal manufacturer for its global expansion to allow it to be more profitable in the long term by meeting the wants and needs of customers in unique global markets." },

  { id: "23s24a", topic: "finance", type: "short", marks: 2, src: "2023 HSC , Section II , Q24(a)",
    stem: "What is the purpose of a cash flow statement?",
    criteria: ["States the purpose of a cash flow statement accurately", "Makes a relevant statement about cash flow statement"],
    sample: "The purpose of a cash flow statement is to identify the inflows and outflows of cash over a period of time." },

  { id: "23s24b", topic: "finance", type: "short", marks: 3, src: "2023 HSC , Section II , Q24(b)",
    stem: "Explain a possible conflict between ONE short-term and ONE long-term financial objective.",
    criteria: ["Identifies both a short-term and a long-term financial objective", "Explains the conflict between the two objectives", "Makes a relevant statement about financial objectives"],
    sample: "There may be a conflict between the short-term financial objective of profitability and the long-term objective of growth. A business entering new markets will require new equipment and more staff. Consequently, this business could initially suffer a short-term financial loss but it may succeed in being more profitable in the long term." },

  { id: "23s24c", topic: "finance", type: "short", marks: 5, src: "2023 HSC , Section II , Q24(c)",
    stem: "Explain TWO limitations of financial reports.",
    criteria: ["Explains two distinct limitations in detail (e.g. valuing assets, capitalising expenses, timing issues)", "Explains two limitations or one limitation in detail", "Identifies limitations or explains one aspect of a limitation", "Identifies a limitation", "Provides some relevant information"],
    sample: "Valuing assets is the process of estimating how much assets are worth. It is problematic to value assets in a financial report as their value changes over time and the process is subjective. For example, land values tend to increase in value therefore, the balance sheet understates the net value of the business. Capitalising expenses involves the business recording an expense as an asset on the balance sheet rather than an expense in the income statement. This would appear as a higher net income for the business, misleading potential investors." },

// ─── 2023 Section III/IV ──────────────────────────────────────────────────────

  { id: "23e25", topic: "hr", type: "extended", marks: 20, src: "2023 HSC , Section III , Q25",
    stem: "Future Century Gaming Pty Ltd operates an online gaming platform targeting players aged 18–40 in Australia. It has been in operation since 2012, providing subscription access to a variety of online games. The business is considering expanding into emerging global markets but is finding it challenging to recruit and retain skilled, qualified game designers and developers in Australia. It is considering international labour markets to overcome staff shortages. The business has decided to finance its expansion into global markets through external sources. The directors have asked you to write a business report in which you: outline some of the challenges including the global factors of costs, skills and supply the business may need to consider in recruiting and retaining staff / compare the use of debt and equity as sources of finance / recommend ONE source of finance this business could use to fund its expansion.",
    criteria: ["Outlines challenges in recruiting/retaining staff in global contexts (costs, skills, supply)", "Compares debt and equity finance with reference to the business context", "Recommends one source of finance with justification", "Makes effective use of the business scenario information", "Presents a sustained, logical and cohesive business report using relevant terminology"],
    sample: "Future Century Gaming faces significant challenges in accessing skilled game developers globally: labour costs vary widely by country, skill supply is concentrated in tech hubs, and sourcing overseas staff involves additional acquisition costs such as visa expenses and relocation. Retaining staff requires competitive rewards and development opportunities. Comparing finance sources: debt provides immediate capital and maintains ownership but increases financial risk and requires regular repayments from subscription revenue. Equity (e.g. new share issue or venture capital) does not require repayment but dilutes ownership. Given the business's existing revenue stream from subscriptions, debt finance is recommended — the predictable cash inflows from subscriptions can service loan repayments, and ownership is preserved during the critical expansion phase." },

  { id: "23e26", topic: "marketing", type: "extended", marks: 20, src: "2023 HSC , Section IV , Q26",
    stem: "To what extent do influences on marketing affect business success?",
    criteria: ["Evaluates the extent to which factors influencing marketing (sociocultural, economic, government, legal, technological, competitive) affect business success", "Applies relevant case study/studies and contemporary business issues", "Considers both positive and negative effects of marketing influences on business success", "Presents a balanced, sustained argument with a clear position on extent", "Uses relevant business terminology and concepts throughout"],
    sample: "Marketing influences significantly affect business success to a large extent. Economic factors such as disposable income levels determine consumer spending capacity — a business that adjusts its pricing strategy to economic conditions (e.g. value offerings during recession) can maintain sales volumes. Sociocultural changes, such as growing health consciousness, have transformed food and beverage marketing, with businesses that adapt gaining substantial market share. Legal and ethical influences, including consumer protection laws, affect promotional strategies and can restrict certain practices. Technologically, the rise of digital marketing has transformed reach and targeting capability, giving businesses that adopt e-marketing and data analytics a competitive edge. While no single influence guarantees success, businesses that continuously monitor and respond to all marketing influences are better positioned to sustain growth and market share." },

  { id: "23e27", topic: "operations", type: "extended", marks: 20, src: "2023 HSC , Section IV , Q27",
    stem: "To what extent do influences on operations affect business success?",
    criteria: ["Evaluates the extent to which influences on operations (globalisation, technology, quality expectations, cost-based competition, government policies, legal regulations, environmental sustainability) affect business success", "Applies relevant case study/studies and contemporary business issues", "Considers how businesses respond to or leverage operations influences", "Presents a balanced, sustained argument with a clear position on extent", "Uses relevant business terminology and concepts throughout"],
    sample: "Influences on operations affect business success to a very large extent. Globalisation has enabled businesses to access lower-cost inputs through global sourcing, improving cost competitiveness, but also introduces supply chain risks. Technological advances, particularly automation and leading-edge technology, dramatically improve productivity and quality but require significant capital investment and can trigger employee resistance. Legal regulations — particularly environmental protection and product safety laws — impose compliance costs but failure to meet them can result in fines and reputational damage. Cost-based competition pressure drives businesses toward lean production and supply chain optimisation. Businesses that successfully navigate these influences by aligning operations strategy with their competitive environment are most likely to achieve sustainable business success." },

// ─── 2024 Section I ───────────────────────────────────────────────────────────

  { id: "24m1", topic: "hr", type: "mcq", marks: 1, src: "2024 HSC , Section I , Q1",
    stem: "Who is most likely to represent employees for an increase in wages?",
    options: ["A trade union", "Fair Work Australia", "An employer association", "Federal Court of Australia"],
    answer: 0, explain: "A trade union represents employees in wage negotiations. Fair Work Australia (Fair Work Commission) and the Federal Court are dispute-resolution bodies; an employer association represents employers." },

  { id: "24m2", topic: "operations", type: "mcq", marks: 1, src: "2024 HSC , Section I , Q2",
    stem: "The banning of dangerous goods such as asbestos is due to",
    options: ["global sourcing.", "business policies.", "legal regulations.", "operational regulations."],
    answer: 2, explain: "Banning of dangerous goods such as asbestos is enforced through legal regulations (government legislation). Business policies are internal; global sourcing and operational regulations are not the mechanism for such bans." },

  { id: "24m3", topic: "hr", type: "mcq", marks: 1, src: "2024 HSC , Section I , Q3",
    stem: "At which stage of the human resource process would a performance appraisal of an employee be conducted?",
    options: ["Acquisition", "Development", "Induction", "Separation"],
    answer: 1, explain: "Performance appraisals are conducted during the Development stage — they identify training needs and measure employee progress. Acquisition is recruitment/selection; induction is onboarding; separation is exit." },

  { id: "24m4", topic: "marketing", type: "mcq", marks: 1, src: "2024 HSC , Section I , Q4",
    stem: "A retailer sells a new style of sunglasses at a significantly higher price for the first month they are sold. What pricing strategy is being used by the retailer?",
    options: ["Price skimming", "Price penetration", "Price discrimination", "Price and quality interaction"],
    answer: 0, explain: "Price skimming sets a high initial price to capture less price-sensitive early customers, then reduces it over time. Penetration pricing is the reverse — entering low to gain market share." },

  { id: "24m5", topic: "hr", type: "mcq", marks: 1, src: "2024 HSC , Section I , Q5",
    stem: "Which row of the table shows the results of effective human resource management? [Table: Workplace accidents / Absenteeism — A: Increase/Decrease, B: Increase/Increase, C: Decrease/Decrease, D: Decrease/Increase]",
    options: ["Workplace accidents Increase / Absenteeism Decrease", "Workplace accidents Increase / Absenteeism Increase", "Workplace accidents Decrease / Absenteeism Decrease", "Workplace accidents Decrease / Absenteeism Increase"],
    answer: 2, explain: "Effective HRM reduces workplace accidents (through WH&S training) and reduces absenteeism (through motivation, fair treatment, and good working conditions). Both decrease." },

  { id: "24m6", topic: "operations", type: "mcq", marks: 1, src: "2024 HSC , Section I , Q6",
    stem: "A government is providing businesses with a tax benefit if they source their electricity through renewable energy sources. The most likely reason for offering this tax benefit is to",
    options: ["minimise government debt.", "minimise government utility costs.", "encourage competition between businesses.", "encourage businesses to be more environmentally sustainable."],
    answer: 3, explain: "A government renewable energy tax incentive is designed to encourage businesses to adopt sustainable practices — an environmental policy objective, not primarily a fiscal or competitive one." },

  { id: "24m7", topic: "operations", type: "mcq", marks: 1, src: "2024 HSC , Section I , Q7",
    stem: "An employee has badly injured their shoulder at work and is seeing a physiotherapist for treatment. The treatment that the physiotherapist provides can be described as a",
    options: ["customised good.", "standardised good.", "customised service.", "standardised service."],
    answer: 2, explain: "A physiotherapist tailors treatment to each patient's specific injury — this is a customised service (intangible, tailored). It is not a good (tangible product) and not standardised (same for all)." },

  { id: "24m8", topic: "hr", type: "mcq", marks: 1, src: "2024 HSC , Section I , Q8",
    stem: "An employee has engaged in misconduct and has been told to leave the organisation. Which of the following terms describes this employee's separation from the organisation?",
    options: ["Attrition", "Dismissal", "Redundancy", "Retrenchment"],
    answer: 1, explain: "Dismissal (summary dismissal) is termination due to serious misconduct. Attrition is natural turnover; redundancy/retrenchment are employer-initiated for business reasons, not employee misconduct." },

  { id: "24m9", topic: "operations", type: "mcq", marks: 1, src: "2024 HSC , Section I , Q9",
    stem: "The role of an operations manager is to",
    options: ["reduce waste and increase efficiency.", "reduce output and increase customisation.", "improve customisation and decrease speed.", "improve quality and decrease economies of scale."],
    answer: 0, explain: "The core role of an operations manager is to maximise efficiency and minimise waste in the transformation process, improving the ratio of outputs to inputs." },

  { id: "24m10", topic: "finance", type: "mcq", marks: 1, src: "2024 HSC , Section I , Q10",
    stem: "A business has: Sales $800 000 / COGS $200 000 / Gross profit $600 000 / Net profit $250 000. Expense ratio = total expenses ÷ sales. What is the expense ratio for this business?",
    options: ["25%", "31%", "35%", "44%"],
    answer: 3, explain: "Total expenses = Gross profit − Net profit = $600 000 − $250 000 = $350 000. Expense ratio = $350 000 ÷ $800 000 = 43.75% ≈ 44%." },

  { id: "24m11", topic: "marketing", type: "mcq", marks: 1, src: "2024 HSC , Section I , Q11",
    stem: "A distributor of a new mop surveys people in a shopping centre about their cleaning habits. The distributor then uses persuasive selling techniques to try and convince the shoppers surveyed to buy their mop. This is an example of which selling technique?",
    options: ["Sugging", "Personal selling", "Illegal marketing", "Relationship marketing"],
    answer: 0, explain: "Sugging (Selling Under the Guise of research) is when a business pretends to conduct a survey but is actually trying to sell. It is illegal under Australian consumer law." },

  { id: "24m12", topic: "hr", type: "mcq", marks: 1, src: "2024 HSC , Section I , Q12",
    stem: "A global business is considering replacing its operations manager for its European division. What type of employment offer would suit this position?",
    options: ["Casual contract", "Individual contract", "Collective agreement", "Greenfields agreement"],
    answer: 1, explain: "An individual contract (common law contract or AWA) is appropriate for a senior management position — it can be tailored to the specific role, responsibilities, and remuneration package." },

  { id: "24m13", topic: "marketing", type: "mcq", marks: 1, src: "2024 HSC , Section I , Q13",
    stem: "LimpLeaf Pty Ltd conducted research before entering the tea market. The research found that customers, because of the company's brand name, thought the product would be inferior. What factor is influencing the customers' choice?",
    options: ["Financial reasons", "Implied conditions", "Environmental reasons", "Psychological reasons"],
    answer: 3, explain: "Brand perception is a psychological factor influencing customer choice. Customers' subjective judgement based on the brand name is psychological, not financial, environmental, or legally implied." },

  { id: "24m14", topic: "finance", type: "mcq", marks: 1, src: "2024 HSC , Section I , Q14",
    stem: "The table shows the cash flow information for a business. Opening balance (Jul): $40 000. Cash in: Jul $30 000 / Aug $10 000 / Sep $22 000. Cash out: Jul $20 000 / Aug $13 000 / Sep $15 000. What is the closing cash balance for September?",
    options: ["$7 000", "$47 000", "$54 000", "$150 000"],
    answer: 2, explain: "Jul closing = 40+30−20 = $50 000. Aug closing = 50+10−13 = $47 000. Sep closing = 47+22−15 = $54 000." },

  { id: "24m15", topic: "finance", type: "mcq", marks: 1, src: "2024 HSC , Section I , Q15",
    stem: "Which organisation functions as the market operator for companies wanting to raise public finance?",
    options: ["Australian Taxation Office", "Australian Securities Exchange", "Australian Prudential Regulation Authority", "Australian Securities and Investment Commission"],
    answer: 1, explain: "The Australian Securities Exchange (ASX) is the market operator where companies list shares to raise public finance through equity markets. ASIC regulates; APRA supervises banks/insurance; ATO handles tax." },

  { id: "24m16", topic: "marketing", type: "mcq", marks: 1, src: "2024 HSC , Section I , Q16",
    stem: "An Australian manufacturer sells its product in the USA and Australia without changing its marketing mix. What is an advantage of using the same marketing mix?",
    options: ["The promotion can be modified in each country.", "Economies of scale can be utilised in advertising.", "World sales will be maximised through customisation.", "It gives the same access to all customers around the world."],
    answer: 1, explain: "Standardisation (using the same marketing mix globally) allows economies of scale in advertising — producing one campaign at scale rather than bespoke campaigns per market." },

  { id: "24m17", topic: "finance", type: "mcq", marks: 1, src: "2024 HSC , Section I , Q17",
    stem: "A business owner is selling their business. If the business owner is unethical, what may they be motivated to do?",
    options: ["Undervalue assets and undervalue liabilities", "Overvalue assets and overvalue liabilities", "Understate income and overstate expenses", "Overstate income and understate expenses"],
    answer: 3, explain: "To maximise sale price, an unethical seller would overstate income (making the business look more profitable) and understate expenses (making it look leaner) to inflate perceived value." },

  { id: "24m18", topic: "operations", type: "mcq", marks: 1, src: "2024 HSC , Section I , Q18",
    stem: "Which of the following are common characteristics of a critical path analysis?",
    options: ["What tasks need to be done, how long they take, delivery timing", "What tasks need to be done, how long they take, what order is necessary", "Which tasks can be completed simultaneously, how long they take, quality testing", "Which tasks can be completed simultaneously, how long they take, how many components are required"],
    answer: 1, explain: "Critical path analysis identifies: what tasks are needed, how long each takes, and the required sequence (what order). Delivery timing, quality testing, and component counts are not its defining characteristics." },

  { id: "24m19", topic: "finance", type: "mcq", marks: 1, src: "2024 HSC , Section I , Q19",
    stem: "A private company wants to expand its operations. To raise funds, it intends to become a public listed company. What name is given to this form of equity finance?",
    options: ["Private equity", "Commercial bill", "New issue of shares", "Share purchase plan"],
    answer: 2, explain: "When a private company becomes publicly listed and issues shares to the public for the first time (IPO), this is a new issue of shares — a form of external equity finance." },

  { id: "24m20", topic: "marketing", type: "mcq", marks: 1, src: "2024 HSC , Section I , Q20",
    stem: "A company sets its primary marketing objective for 2025 to be the dominant market leader. [Table: 2023: Ad budget $1m / Sales $10m / Market share 20%; 2024: Ad budget $2m / Sales $15m / Market share 15%] What should the marketing manager do to achieve the marketing objective?",
    options: ["Increase the advertising budget to boost market share", "Make no changes as sales have increased by $5 million", "Decrease the advertising budget as the market is growing", "Control the marketing mix as the market share has declined"],
    answer: 3, explain: "Despite rising sales, market share fell from 20% to 15% — the objective of market leadership is not being met. The manager must control and adjust the marketing mix to reverse the share decline." },

// ─── 2024 Section II ──────────────────────────────────────────────────────────

  { id: "24s21a", topic: "operations", type: "short", marks: 3, src: "2024 HSC , Section II , Q21(a)",
    stem: "A manufacturer of flags has seen a steady increase in sales, which coincides with the start of a major sporting event. The operations manager has increased the working hours of all employees to meet this demand. Explain the interdependence between operations and ONE other key business function for this business.",
    criteria: ["Provides an explanation of the interdependence between operations and ONE other business function for this business", "Demonstrates some understanding of the interdependence between operations and ONE other business function", "Provides some relevant information"],
    sample: "The operations department is dependent on the finance department who would need to provide a source of funds to pay for employee overtime and an increase in electricity, fabric etc. Finance is guided by the operations department's product specifications as this is what will determine the cost/finance required." },

  { id: "24s21b", topic: "operations", type: "short", marks: 3, src: "2024 HSC , Section II , Q21(b)",
    stem: "A department store is considering the quantity of products they will need to order and store for the following year. Products include: Product A — Baby Milk Formula 900g; Product B — Air conditioner. How can each of these TWO products affect inventory management?",
    criteria: ["Provides an explanation of how each product will affect inventory management", "Demonstrates some understanding of how product/s will affect inventory management", "Provides some relevant information"],
    sample: "Air conditioners are a bulky item and take considerable warehouse space to store at greater expense. Baby formula needs a FIFO or JIT inventory system, as it is a perishable item." },

  { id: "24s21c", topic: "operations", type: "short", marks: 4, src: "2024 HSC , Section II , Q21(c)",
    stem: "An ice-cream business is considering allowing customers to choose their own ice-cream flavours and toppings rather than having a set menu of ice-creams. Discuss the influence of visibility (customer contact) for this business.",
    criteria: ["Provides a discussion of the implications of visibility (customer contact) for this business", "Demonstrates a sound understanding of the implications of visibility (customer contact) for this business", "Demonstrates some understanding of visibility (customer contact) on this business", "Provides some relevant information"],
    sample: "If customers are able to choose their own toppings and flavours they are more likely to provide feedback on their favourite flavour and topping combinations. They may return to the store for repeat purchases which will lead to an increase in sales. However, this will come at a cost to the business as this will require a variety of ingredients and an increase in time required to make each item." },

  { id: "24s22a", topic: "hr", type: "short", marks: 2, src: "2024 HSC , Section II , Q22(a)",
    stem: "A business has highly skilled employees who are valued for their input in the decision-making process. Employees are consulted in setting objectives and have an influence on strategies adopted, including flexible working conditions. Outline the relationship between ONE stakeholder and the human resources function of this business.",
    criteria: ["Outlines the relationship between ONE stakeholder and the human resources function of this business", "Provides some relevant information"],
    sample: "The employee is a stakeholder who has an interest in the business, as they receive a wage or salary for the work that they complete. They rely on job security and being treated fairly whilst at work." },

  { id: "24s22b", topic: "hr", type: "short", marks: 3, src: "2024 HSC , Section II , Q22(b)",
    stem: "A business has highly skilled employees who are valued for their input in the decision-making process. Employees are consulted in setting objectives and have an influence on strategies adopted, including flexible working conditions. Explain how this business exhibits corporate social responsibility in the management of employees.",
    criteria: ["Provides an explanation of how this business exhibits corporate social responsibility in the management of employees", "Demonstrates some understanding of how this business exhibits CSR in employee management", "Provides some relevant information"],
    sample: "This business is ethical because it values its employees and includes them in the decision-making process, offering flexible working conditions. The effect of this is a boost in employee morale as they feel valued." },

  { id: "24s22c", topic: "hr", type: "short", marks: 5, src: "2024 HSC , Section II , Q22(c)",
    stem: "A business has highly skilled employees who are valued for their input in the decision-making process. Employees are consulted in setting objectives and have an influence on strategies adopted, including flexible working conditions. Justify the importance of maintenance in human resource management for this business.",
    criteria: ["Provides a thorough justification of the importance of maintenance in HRM for this business", "Provides a sound justification of the importance of maintenance in HRM for this business", "Demonstrates a sound understanding of the importance of maintenance of employees", "Demonstrates some understanding of the maintenance of employees", "Provides some relevant information"],
    sample: "Maintenance in HRM through effective rewards systems, including flexible working conditions, attract and retain highly skilled and talented employees, fostering motivation and loyalty. This should maintain a positive work culture, enhancing productivity, reducing turnover, and ultimately, reducing the costs associated with training new staff." },

  { id: "24s23a", topic: "marketing", type: "short", marks: 2, src: "2024 HSC , Section II , Q23(a)",
    stem: "A piano teaching business which guarantees highly qualified and experienced teachers is rapidly expanding across all states of Australia. Outline how marketing of this business relies on an effective human resources department.",
    criteria: ["Outlines how marketing of this business relies on a human resources department", "Provides some relevant information"],
    sample: "For this piano-teaching business to advertise and market itself as having highly skilled staff it will need to rely on the human resources department to hire teachers quickly, who are knowledgeable with the required skills." },

  { id: "24s23b", topic: "marketing", type: "short", marks: 4, src: "2024 HSC , Section II , Q23(b)",
    stem: "A piano teaching business which guarantees highly qualified and experienced teachers is rapidly expanding across all states of Australia. How may economic factors influence customers choosing this business?",
    criteria: ["Demonstrates a thorough understanding of how economic factors influence customers choosing this business", "Demonstrates a sound understanding of how economic factors influence customers choosing this business", "Demonstrates some understanding of economic factors and/or customer choice", "Provides some relevant information"],
    sample: "Economic forces will influence a customer's willingness and ability to spend. An economic downturn will reduce disposable income and customers may not choose piano lessons or elect a cheaper alternative. In a downturn, consumers will forego spending on non-essential goods/services and spend their income on essential items such as food and housing. A booming economy may see consumer optimism, more job security and/or rising incomes allowing them to seek quality options." },

  { id: "24s23c", topic: "marketing", type: "short", marks: 4, src: "2024 HSC , Section II , Q23(c)",
    stem: "A piano teaching business which guarantees highly qualified and experienced teachers is rapidly expanding across all states of Australia. Propose TWO ways this business can use market segmentation to continue its growth.",
    criteria: ["Proposes TWO relevant ways segmentation can be used by this business to continue its growth", "Proposes TWO ways segmentation can be used by this business", "Proposes ONE way segmentation can be used by this business OR identifies TWO segmentation methods", "Provides some relevant information"],
    sample: "This business could divide the total market into smaller segments so it can target its service to them more effectively and increase sales. For example, it could divide by demographics and advertise and tailor the service and price to a particular income level and social class. It could also segment by psychographic characteristics and appeal to aspirational pianists who may want to increase their skills and satisfy their personal interest." },

  { id: "24s24ai", topic: "finance", type: "short", marks: 2, src: "2024 HSC , Section II , Q24(a)(i)",
    stem: "The following is an extract from a business balance sheet. Assets: Cash at bank $5 000 / Accounts receivable $20 000 / Inventory $5 000 / Office equipment $70 000 / Motor vehicles $80 000. Liabilities: Overdraft $9 000 / Accounts payable $11 000 / Long-term loan $90 000. Owners' equity: Capital $55 000 / Retained profits $15 000. Calculate the current ratio for this business. Show all working. (Current ratio = current assets ÷ current liabilities)",
    criteria: ["Calculates the correct current ratio and shows working", "Provides some relevant information"],
    sample: "Current assets = (Cash at bank + accounts receivable + inventory) ÷ (Overdraft + Accounts payable) = ($5 000 + $20 000 + $5 000) ÷ ($9 000 + $11 000) = $30 000 ÷ $20 000 = 1.5 = 1.5 : 1" },

  { id: "24s24aii", topic: "finance", type: "short", marks: 4, src: "2024 HSC , Section II , Q24(a)(ii)",
    stem: "A business has a current ratio of 1.5:1. Overdraft $9 000 / Accounts payable $11 000 / Long-term loan $90 000 / Capital $55 000 / Retained profits $15 000. Explain the influence of ONE financial institution on the financial management of this business.",
    criteria: ["Provides a thorough explanation of the influence of ONE financial institution on the financial management of this business", "Provides a sound explanation of the influence of ONE financial institution on financial management", "Demonstrates some understanding of the influence on financial management", "Provides some relevant information"],
    sample: "This business is highly geared and a financial institution, such as a bank, may not be willing to lend additional finance because they pose a risk, which restricts the business's ability to achieve growth. Banks may increase interest rates, which will increase the business's financial commitments and affect its liquidity and capacity to repay existing debt." },

  { id: "24s24b", topic: "finance", type: "short", marks: 4, src: "2024 HSC , Section II , Q24(b)",
    stem: "Explain how offering discounts for early payment may improve a business's cash flow and reduce working capital.",
    criteria: ["Provides an explanation of how offering discounts for early payments can improve cash flow and reduce working capital", "Demonstrates a sound understanding of how offering discounts for early payments can improve cash flow and/or reduce working capital", "Demonstrates some understanding of discounts for early payments and/or working capital", "Provides some relevant information"],
    sample: "Discounts for early payments is a strategy that allows businesses to increase their cash flow in the short term. This leads to the business accessing funds faster than if it were to wait for a full payment by the original due date. This strategy will not improve the current ratio because the current assets will decrease by the discount offered. The discount offered will reduce the revenue collected and will reduce the current cash available for working capital." },

// ─── 2024 Section III/IV ──────────────────────────────────────────────────────

  { id: "24e25", topic: "hr", type: "extended", marks: 20, src: "2024 HSC , Section III , Q25",
    stem: "Hans-Made Watches is a business that designs and hand-makes European-style watches with a lifetime warranty. Features of the business include: family run business / selling watches to the local community / autocratic leadership style. The business has seen a decrease in sales and market share. The owner is retiring soon and his children are hoping to improve the performance of the business. Below is an expression of interest for an assistant manager role that has been distributed to the business's family and friends only. [Hans-Made Watches — Established 1976 — Expression of interest: Assistant Manager — You will be required to work in the shop and manage day-to-day business needs. Hours of work are 8 am to 6 pm Monday to Saturday. General information: award wages offered / free parking onsite / use of coffee machine / reports to the owner / no experience necessary.] You have been hired as a consultant by the owner to write a business report. In your report: describe the product differentiation strategy for this business / discuss the current acquisition process for this business / recommend appropriate human resource strategies for this business.",
    criteria: ["Comprehensively describes the product differentiation strategy for this business", "Comprehensively discusses the current acquisition process of this business", "Comprehensively recommends appropriate human resource strategies", "Makes effective use of the information provided, demonstrating extensive knowledge relevant to the question", "Presents a sustained, logical and cohesive business report integrating relevant business terminology and concepts"],
    sample: "Hans-Made Watches differentiates its product through its craftsmanship positioning — hand-made European-style watches with a lifetime warranty signal premium quality and exclusivity. The business could strengthen this through branding strategies such as packaging upgrades and positioning in the luxury segment. The current acquisition process — a closed expression of interest distributed only to family and friends with no stated experience requirements — is problematic. It severely narrows the talent pool, risks nepotism, and is unlikely to attract candidates with the retail, digital, or management skills needed to reverse declining sales. Recommended HR strategies: (1) shift from autocratic to participative leadership to empower the incoming generation and improve employee engagement; (2) implement external, merit-based recruitment to attract skilled applicants; (3) invest in training and development to build digital retail and customer service capabilities; (4) introduce performance-based monetary rewards to motivate and retain talent during the ownership transition." },

  { id: "24e26", topic: "finance", type: "extended", marks: 20, src: "2024 HSC , Section IV , Q26",
    stem: "How can financial strategies affect the objectives of financial management?",
    criteria: ["Demonstrates a comprehensive understanding of how financial strategies affect objectives of financial management", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response communicating clearly using relevant business terminology", "Links specific strategies (cash flow management, working capital management, profitability management, global financial management) to specific objectives (profitability, growth, efficiency, liquidity, solvency)", "Considers both short-term and long-term effects"],
    sample: "Financial strategies directly shape a business's ability to achieve its financial management objectives. Cash flow management strategies — such as factoring receivables, offering discounts for early payment, and managing distribution of payments — improve liquidity by ensuring sufficient short-term cash. Working capital strategies (controlling current assets and current liabilities, using leasing or sale and leaseback) improve solvency. Profitability management through cost controls (expense minimisation, cost centres) and revenue controls (setting marketing objectives) directly addresses the profitability objective. Global financial management strategies — hedging, derivatives, and selecting appropriate methods of international payment — protect against exchange rate risk and preserve profit margins in global operations. Each strategy has trade-offs: aggressive cost-cutting may harm quality; factoring improves liquidity but at a cost to revenue. Businesses that align their financial strategies with their specific stage of growth and financial position will most effectively achieve their objectives." },

  { id: "24e27", topic: "operations", type: "extended", marks: 20, src: "2024 HSC , Section IV , Q27",
    stem: "How can operations strategies affect corporate social responsibility?",
    criteria: ["Demonstrates a comprehensive understanding of how operations strategies affect corporate social responsibility", "Applies relevant case study/studies and contemporary business issues", "Distinguishes between legal compliance and ethical responsibility in operations strategies", "Links specific operations strategies (quality management, technology, outsourcing, inventory, supply chain, global factors, new product/service design) to CSR outcomes", "Presents a sustained, logical and cohesive response using relevant business terminology"],
    sample: "Operations strategies can significantly advance or undermine corporate social responsibility. Quality management strategies that emphasise zero defects and continuous improvement reduce waste and product recalls, benefiting consumers and the environment. Outsourcing decisions have major CSR implications — outsourcing to suppliers with poor labour conditions or environmental practices can expose a business to reputational and ethical risk, while ethical sourcing policies demonstrate social responsibility. Supply chain development strategies that prioritise local sourcing or certified ethical suppliers strengthen CSR credentials. Technology adoption can improve environmental sustainability through energy efficiency and waste reduction. Global sourcing offers cost advantages but must be balanced against the ethical responsibility to ensure fair treatment of workers throughout the supply chain. Businesses that embed CSR considerations into their operations strategy — rather than treating it as a compliance afterthought — build stronger brand equity, customer loyalty, and employee engagement." },

// ─── 2025 Section I ───────────────────────────────────────────────────────────

  { id: "25m1", topic: "operations", type: "mcq", marks: 1, src: "2025 HSC , Section I , Q1",
    stem: "Which performance objective is a business trying to achieve by minimising waste in production?",
    options: ["Cost", "Flexibility", "Speed", "Volume"],
    answer: 0, explain: "Minimising waste directly reduces production costs — achieving the cost performance objective. Flexibility relates to adapting to change; speed to delivery time; volume to quantity produced." },

  { id: "25m2", topic: "marketing", type: "mcq", marks: 1, src: "2025 HSC , Section I , Q2",
    stem: "A dealership customises the caravans it sells by putting solar panels on the roof. Which type of market does this business operate in?",
    options: ["Mass", "Niche", "Production", "Resource"],
    answer: 1, explain: "The dealership serves a specific segment — buyers wanting solar-equipped caravans. This is a niche market: a specialised subset of the broader caravan market." },

  { id: "25m3", topic: "finance", type: "mcq", marks: 1, src: "2025 HSC , Section I , Q3",
    stem: "Which of the following is an essential component of a balance sheet?",
    options: ["Assets", "Expenses", "Sales", "Wages"],
    answer: 0, explain: "A balance sheet records assets, liabilities, and owner's equity at a point in time. Expenses, sales, and wages appear in the income statement (profit and loss), not the balance sheet." },

  { id: "25m4", topic: "hr", type: "mcq", marks: 1, src: "2025 HSC , Section I , Q4",
    stem: "An employee is applying for maternity leave. She is told her job will not exist when she plans to return to work. What form of discrimination may have occurred?",
    options: ["Age", "Disability", "Racial", "Sex"],
    answer: 3, explain: "Denying a woman's right to return from maternity leave constitutes sex/gender discrimination — a breach of equal employment opportunity law protecting pregnancy-related rights." },

  { id: "25m5", topic: "marketing", type: "mcq", marks: 1, src: "2025 HSC , Section I , Q5",
    stem: "The price of a fitness watch is advertised as on special for $159. The store usually sells this watch for $159. Which area of consumer law has been broken?",
    options: ["Warranties", "Implied conditions", "Price discrimination", "Deceptive and misleading advertising"],
    answer: 3, explain: "Advertising a product as 'on special' at its regular price is deceptive — it misleads consumers into believing they are receiving a discount. This breaches the Australian Consumer Law prohibition on misleading representations." },

  { id: "25m6", topic: "marketing", type: "mcq", marks: 1, src: "2025 HSC , Section I , Q6",
    stem: "An international clothing brand uses Japanese fashion trends and cultural preferences in its designs and advertisements for its Japanese market. Which global marketing strategy is being used?",
    options: ["Customisation", "Standardisation", "Global branding", "Price and quality interaction"],
    answer: 0, explain: "Customisation adapts the marketing mix to local market preferences and cultural requirements. Using local trends specifically for the Japanese market is customisation, not the uniform approach of standardisation." },

  { id: "25m7", topic: "operations", type: "mcq", marks: 1, src: "2025 HSC , Section I , Q7",
    stem: "Which of the following is an essential aspect of logistics?",
    options: ["Reorganising plant layout", "Checking the quality of all output", "Assessing materials handling and packaging", "Creating a budget for new machinery and equipment"],
    answer: 2, explain: "Logistics involves managing the physical flow of goods including materials handling, packaging, warehousing, and distribution. Plant layout and quality checking are operations process concerns; budgeting for machinery is finance/investment." },

  { id: "25m8", topic: "operations", type: "mcq", marks: 1, src: "2025 HSC , Section I , Q8",
    stem: "A business, as part of its quality management strategy, demonstrates an ongoing commitment to make its operations more efficient and effective. This is an example of which of the following?",
    options: ["Assurance", "Control", "Flexibility", "Improvement"],
    answer: 3, explain: "Continual improvement (kaizen) is the quality management approach involving an ongoing commitment to incrementally improving efficiency and effectiveness. Quality assurance sets standards; quality control checks against them." },

  { id: "25m9", topic: "finance", type: "mcq", marks: 1, src: "2025 HSC , Section I , Q9",
    stem: "A business, with a 30-day credit policy, collects accounts receivables on average every 26 days. Which objective of financial management is this business aiming to achieve?",
    options: ["Efficiency", "Growth", "Minimisation", "Solvency"],
    answer: 0, explain: "Collecting receivables faster than the 30-day credit period demonstrates efficient management of working capital — using assets effectively to generate revenue. This is the efficiency objective." },

  { id: "25m10", topic: "hr", type: "mcq", marks: 1, src: "2025 HSC , Section I , Q10",
    stem: "Which of the following lists elements of the legal framework that influences human resource management?",
    options: ["Code of conduct, work health and safety, awards", "Code of conduct, work health and safety, workers compensation", "Common law, minimum employment standards, customer contact", "Common law, minimum employment standards, workers compensation"],
    answer: 3, explain: "The legal HR framework includes common law (employment contracts), minimum employment standards (NES under Fair Work Act), and workers compensation. Codes of conduct are internal/ethical; customer contact is not a legal HR framework." },

  { id: "25m11", topic: "hr", type: "mcq", marks: 1, src: "2025 HSC , Section I , Q11",
    stem: "What is a benefit of using internal recruitment for a senior management position?",
    options: ["The position will always be filled.", "It encourages staff to seek professional growth.", "There is a larger pool of applicants to choose from.", "The business can gain perspectives from outside of the business."],
    answer: 1, explain: "Internal recruitment motivates existing employees by demonstrating that promotion opportunities exist, encouraging professional development. A larger pool and external perspectives are advantages of external recruitment." },

  { id: "25m12", topic: "operations", type: "mcq", marks: 1, src: "2025 HSC , Section I , Q12",
    stem: "A business is introducing leading edge technology and is experiencing employee resistance. What is the most likely reason for this resistance to change?",
    options: ["Fear of the unknown", "Redundancy payments", "Increased financial costs", "Reorganisation of plant layout"],
    answer: 0, explain: "The most common psychological reason for employee resistance to new technology is fear of the unknown — uncertainty about how roles will change and whether they might lose their job." },

  { id: "25m13", topic: "marketing", type: "mcq", marks: 1, src: "2025 HSC , Section I , Q13",
    stem: "A marketing manager recognises that poor customer service has negatively affected sales results. In which part of the marketing process would this recognition occur?",
    options: ["Identifying target markets", "Undertaking situational analysis", "Developing marketing strategies", "Establishing marketing objectives"],
    answer: 1, explain: "Recognising that poor customer service hurts sales requires analysing the current situation — this is the situational analysis (SWOT) stage, which identifies weaknesses before setting objectives or strategies." },

  { id: "25m14", topic: "marketing", type: "mcq", marks: 1, src: "2025 HSC , Section I , Q14",
    stem: "Which of the following marketing strategies could a new gym adopt in order to attract customers and become a viable business?",
    options: ["Charge a high price during the introductory stage", "Set an introductory price that is the same as its competitors", "Offer a first month membership at a discount to the normal monthly fee", "Offer a lifetime membership that is below the cost of providing the service"],
    answer: 2, explain: "A new gym should use price penetration — offering an introductory discount attracts price-sensitive customers and builds membership base. A high price deters new customers; below-cost lifetime memberships are financially unsustainable." },

  { id: "25m15", topic: "hr", type: "mcq", marks: 1, src: "2025 HSC , Section I , Q15",
    stem: "A graph of employee data is shown. What would be the most likely cause of the change in data after month 3?",
    options: ["Staff completed a productivity course.", "Employees were given a monetary bonus.", "There was a change in senior management.", "Improvements in work health and safety were made."],
    answer: 2, explain: "A change in senior management (e.g. to an autocratic style) is the most likely cause of simultaneous increases in stress and absenteeism alongside falling performance. Courses, bonuses, and WH&S improvements would produce opposite effects." },

  { id: "25m16", topic: "finance", type: "mcq", marks: 1, src: "2025 HSC , Section I , Q16",
    stem: "An extract from a business document is shown. Opening balance July $2 000. Cash in: July $5 000 / Aug $3 000 / Sept $5 000 / Oct $8 000 / Nov $8 000 / Dec $4 000. Cash out: July $5 000 / Aug $5 000 / Sept $7 000 / Oct $3 000 / Nov $10 000 / Dec $2 000. In which month should this business have adopted cash flow management strategies?",
    options: ["August", "September", "November", "December"],
    answer: 0, explain: "Calculating closing balances: July = $2 000 + $5 000 − $5 000 = $2 000; August = $2 000 + $3 000 − $5 000 = $0; September = $0 + $5 000 − $7 000 = −$2 000. The balance hits $0 in August and turns negative in September. Cash flow management strategies should have been adopted in August to prevent the deficit." },

  { id: "25m17", topic: "hr", type: "mcq", marks: 1, src: "2025 HSC , Section I , Q17",
    stem: "A chef's finger has been cut off during a workplace accident. Which of the following steps should the employer take? [Step one / Step two / Step three]",
    options: ["Work site is assessed for safety → Employee takes annual leave → Injury management plan is created", "Injury management plan is created → Employee returns to work → Employee takes annual leave", "Work site is assessed for safety → Injury management plan is created → Employee is assigned suitable duties", "Modified work hours are organised → Injury management plan is created → Employee returns to work"],
    answer: 2, explain: "The correct WH&S response sequence: (1) assess the work site for safety to prevent further injury, (2) create an injury management plan for the affected employee, (3) assign suitable duties during recovery." },

  { id: "25m18", topic: "finance", type: "mcq", marks: 1, src: "2025 HSC , Section I , Q18",
    stem: "In the hope of generating long-term profit, a medical company spends $2 billion developing medicine to cure a disease. This is recorded on the company's balance sheet. Which limitation of financial reports does this demonstrate?",
    options: ["Timing issues", "Valuing assets", "Debt repayment", "Capitalising expenses"],
    answer: 3, explain: "Capitalising expenses means recording an expense (R&D spend) as an asset on the balance sheet rather than an immediate expense. This inflates the balance sheet and understates current-period expenses — a significant limitation of financial reporting." },

  { id: "25m19", topic: "operations", type: "mcq", marks: 1, src: "2025 HSC , Section I , Q19",
    stem: "A retail franchise is opening a new store. Which of the following is the correct sequence for its operations process?",
    options: ["Product → task design → materials", "Facilities → control → customer service", "Information → warranties → improvement", "Human resources → planning → customers"],
    answer: 1, explain: "Operations processes in retail involve: facilities (physical store setup), control systems (inventory/quality monitoring), and customer service (the retail experience delivered to customers)." },

  { id: "25m20", topic: "finance", type: "mcq", marks: 1, src: "2025 HSC , Section I , Q20",
    stem: "A business calculated its gearing ratio as follows. 2023: 75%, 2024: 66%. Which of the following is a correct statement about the business in 2024?",
    options: ["The debt to equity ratio has improved.", "There is a higher risk of business failure.", "The solvency of this business has declined.", "The owner will have a higher return-on-equity."],
    answer: 0, explain: "A decrease in the gearing ratio (75%→66%) means the business is using less debt relative to equity — an improvement in the debt-to-equity ratio. Lower gearing reduces failure risk and improves solvency." },

// ─── 2025 Section II ──────────────────────────────────────────────────────────

  { id: "25s21a", topic: "operations", type: "short", marks: 2, src: "2025 HSC , Section II , Q21(a)",
    stem: "A cafe produces quality food and friendly, personalised service. It donates its left-over food to a local charity at the end of each day. Outline the corporate social responsibility demonstrated by this business.",
    criteria: ["Outlines the corporate social responsibility demonstrated by the cafe", "Makes a relevant statement about CSR"],
    sample: "The cafe can demonstrate corporate social responsibility by donating food to a local charity that supports the community." },

  { id: "25s21b", topic: "operations", type: "short", marks: 2, src: "2025 HSC , Section II , Q21(b)",
    stem: "A cafe produces quality food and friendly, personalised service. Outline the difference between goods and services in this business.",
    criteria: ["Outlines the difference between goods and services for this business", "Makes a relevant statement about goods and/or services"],
    sample: "The cafe produces meals (goods) that are perishable. Services can be customised or standardised. This cafe is known for its friendly service." },

  { id: "25s21c", topic: "operations", type: "short", marks: 3, src: "2025 HSC , Section II , Q21(c)",
    stem: "A cafe produces quality food and friendly, personalised service. It donates its left-over food to a local charity at the end of each day. Explain the influence of ONE legal regulation on the operations management of this business.",
    criteria: ["Explains the influence of one legal regulation on operations management for this business", "Demonstrates some understanding of legal regulation and operations", "Makes a relevant statement about legal regulation"],
    sample: "Legal regulations such as food handling and storage could influence this business because they must ensure that they meet the standards required. This may require specific training of employees on how to handle and store food correctly to ensure the quality of the food." },

  { id: "25s21d", topic: "operations", type: "short", marks: 4, src: "2025 HSC , Section II , Q21(d)",
    stem: "The owners of the cafe would like to expand their dessert range. They plan to outsource cakes from the local bakery to sell at their cafe. Discuss the implications of outsourcing the new desserts for the operation of this business.",
    criteria: ["Discusses both positive and negative implications of outsourcing for this business", "Provides one implication of outsourcing with explanation", "Makes a relevant statement about outsourcing", "Provides some relevant information"],
    sample: "Outsourcing cakes will mean the cafe is no longer required to bake cakes. The business can focus on the core activity of making excellent meals, resulting in greater customer satisfaction. They can also have access to expert bakers to make the cakes. However, there may be loss of quality and supply control of the cakes." },

  { id: "25s22a", topic: "marketing", type: "short", marks: 2, src: "2025 HSC , Section II , Q22(a)",
    stem: "A business sells stainless steel water bottles. However, customers have complained that the bottles leak, and that they do not come in biodegradable packaging. Identify ONE weakness and ONE potential threat for this business.",
    criteria: ["Correctly identifies one weakness and one potential threat", "Correctly identifies one weakness or one potential threat"],
    sample: "Weakness: leaking bottles. Potential threat: changing attitudes towards environmental expectations." },

  { id: "25s22b", topic: "marketing", type: "short", marks: 4, src: "2025 HSC , Section II , Q22(b)",
    stem: "A business sells stainless steel water bottles. However, customers have complained that the bottles leak, and that they do not come in biodegradable packaging. Justify TWO product strategies that could be implemented by this business to gain a competitive advantage.",
    criteria: ["Justifies two product strategies with explanation of how each gains competitive advantage", "Justifies one product strategy with explanation of competitive advantage", "Identifies a product strategy", "Provides some relevant information"],
    sample: "The business could implement a new packaging strategy where the bottle packaging box is made from recyclable materials. This would persuade customers to purchase the product over competitor products by enhancing the ecofriendly features of the packaging. A branding strategy allows the product to be well known by the consumers. The business could include a modern logo and colour their bottles a distinct green which is synonymous with the environment. Implementing both strategies will allow the business to gain a competitive advantage through increased product awareness." },

  { id: "25s22c", topic: "marketing", type: "short", marks: 3, src: "2025 HSC , Section II , Q22(c)",
    stem: "A business sells stainless steel water bottles. However, customers have complained that the bottles leak, and that they do not come in biodegradable packaging. Why is it important for this business to monitor and control its marketing strategies?",
    criteria: ["Explains why monitoring and controlling marketing strategies is important for this business", "Demonstrates some understanding of monitoring and controlling marketing strategies", "Makes a relevant statement about monitoring and controlling"],
    sample: "Monitoring and controlling the marketing strategy is essential to keep this business informed regarding customer complaints about the bottles leaking. Managers need to look at whether or not the objective of gaining a competitive advantage is being met and what actions can be taken. By comparing actual and planned results the business can plan effectively for the future and ensure the marketing strategies are being met." },

  { id: "25s23a", topic: "finance", type: "short", marks: 2, src: "2025 HSC , Section II , Q23(a)",
    stem: "A travel agency is focused on expanding its sales in several countries. The business provided the following financial information: Sales 2023=$600 000 / 2024=$700 000. Total expenses 2023=$140 000 / 2024=$210 000. Net profit 2023=$160 000 / 2024=$170 000. Expense ratio formula: total expenses ÷ sales × 100. Industry average expense ratio 2024=20%. What does the expense ratio for 2024 indicate for this business?",
    criteria: ["Calculates the expense ratio for 2024 correctly (30%) and explains what it indicates", "Calculates the expense ratio correctly", "Makes a relevant statement about the expense ratio"],
    sample: "The expense ratio is 210 000 ÷ 700 000 × 100 = 30%. The efficiency of the business is a concern as the expense ratio is higher than 2023 and the industry average." },

  { id: "25s23b", topic: "finance", type: "short", marks: 4, src: "2025 HSC , Section II , Q23(b)",
    stem: "A travel agency is focused on expanding its sales in several countries. The business's comparative ratio analysis: Expense ratio 2023=23.3% / 2024=30% (industry average 20%); Debt to equity 2023=0.6:1 / 2024=1:1 (industry average 0.6:1); ROE 2023=8% / 2024=8.5% (industry average 12%). How can undertaking a comparative ratio analysis improve this business's financial outcome?",
    criteria: ["Explains how comparative ratio analysis improves financial outcomes with reference to the data provided", "Demonstrates sound understanding of comparative ratio analysis and financial outcomes", "Demonstrates some understanding of ratio analysis", "Makes a relevant statement about ratio analysis"],
    sample: "Ratios can be compared across different years, against industry standards or benchmarks. In this business, the expense ratio has declined; the business is not efficiently spending funds and can begin to control expenses which may improve profitability. Analysis of the gearing ratio and return on equity against industry averages shows the business is performing poorly. They may decide to use equity and not borrow more as they are already highly geared and taking more risks than others, which affects their long-term viability." },

  { id: "25s23c", topic: "finance", type: "short", marks: 4, src: "2025 HSC , Section II , Q23(c)",
    stem: "A travel agency is focused on expanding its sales in several countries. Explain how TWO global market influences could affect the solvency of this business.",
    criteria: ["Explains how two global market influences affect the solvency of this travel agency", "Explains how one global market influence affects solvency", "Demonstrates some understanding of global market influences and/or solvency", "Makes a relevant statement about global market influences or solvency"],
    sample: "This travel agency will be impacted by the global economic outlook. If the international economy is strong, the business may need more funds to grow as their travel service expands. If these funds are borrowed, it will further increase the debt and negatively impact solvency. If interest rates are decreasing, the amount borrowed overseas will have less interest expense and reduce the risks undertaken by the business, lowering the overall gearing of this business." },

  { id: "25s24a", topic: "hr", type: "short", marks: 3, src: "2025 HSC , Section II , Q24(a)",
    stem: "Describe the influence technology has on the human resources function.",
    criteria: ["Describes the influence technology has on the HR function with examples", "Demonstrates some understanding of technology and HR", "Makes a relevant statement about technology or HR"],
    sample: "Technology such as video conferencing, apps and websites, and online storage allow both employers and employees to access their work remotely and work collaboratively offsite. These technologies have allowed staff to work remotely at the same pace as staff working in the office." },

  { id: "25s24b", topic: "hr", type: "short", marks: 3, src: "2025 HSC , Section II , Q24(b)",
    stem: "Employees at a factory have been discouraged by their employers from joining a union. Explain TWO possible reasons for this.",
    criteria: ["Explains two possible reasons employers discourage unionisation", "Explains one reason employers discourage unionisation", "Makes a relevant statement about unions or employer resistance", "Provides some relevant information"],
    sample: "Unions will advocate for higher pay and better conditions like leave and work health and safety processes. These changes are costly and will reduce the profits of the business. Employers may also discourage unionisation as it brings their processes under further scrutiny which could lead to fines, staff turnover and industrial action which is also costly." },

  { id: "25s24c", topic: "hr", type: "short", marks: 4, src: "2025 HSC , Section II , Q24(c)",
    stem: "A business pays migrant workers less, and bullies staff members. Explain how this business is engaging in illegal practices.",
    criteria: ["Explains how both paying migrants less and bullying are illegal practices", "Explains how one of the practices is illegal", "Makes a relevant statement about illegal employment practices", "Provides some relevant information"],
    sample: "Under Australian government laws it is illegal to discriminate and pay migrant workers less, as they may not be meeting minimum wage rates or in breach of awards and enterprise agreements. Bullying staff is illegal and could be in breach of antidiscrimination laws or work, health and safety. Businesses who undertake these actions can be taken to court and fined." },

// ─── 2025 Section III/IV ──────────────────────────────────────────────────────

  { id: "25e25", topic: "operations", type: "extended", marks: 20, src: "2025 HSC , Section III , Q25",
    stem: "XYZ Equipment Pty Ltd is an Australian business which manufactures equipment for Australian schools. The business would like to relocate and manufacture overseas by the beginning of 2026 for the following reasons: labour and production costs in Australia are too high / product is of poor quality / Australia has strict environmental laws / there is a potential growth market in Asia. The business has provided a chart that shows their initial plan for the relocation. [Relocation plan for XYZ Equipment Pty Ltd 2025–2026: Activity/sequence — October: Close Australian factory, Source new Asian suppliers; November: Manufacture equipment; December: Build new factory (partial); January–March: Determine staffing needs; February: Lease warehouse for storage; March: Register business name.] You have been hired as a consultant by the owner to write a business report. In your report: outline ONE relevant human resource management process that the business could use / describe the purpose of the above chart and any issues found in the chart / recommend appropriate global factors the business can use to achieve cost leadership.",
    criteria: ["Outlines one relevant HR management process (acquisition, development, maintenance, or separation) relevant to the relocation", "Describes the purpose of the Gantt chart and identifies at least one issue (e.g. building factory starts before manufacturing equipment is complete; registering business name is last — should be earlier)", "Recommends appropriate global factors for cost leadership (global sourcing, economies of scale, scanning and learning, R&D)", "Makes effective use of the stimulus material provided", "Presents a sustained, logical and cohesive business report using relevant terminology"],
    sample: "XYZ Equipment should use the acquisition process — specifically recruitment and selection — to identify and hire skilled workers in the Asian manufacturing location. This includes advertising roles, shortlisting candidates, and selecting those with the technical expertise required. The Gantt chart is a scheduling tool used to plan and sequence activities over time, showing when each task should start and finish. An issue identified is that 'Manufacture equipment' is scheduled for November — before 'Build new factory' is complete (December) — which is operationally impossible; the factory must be built before manufacturing commences. Additionally, 'Register business name' is scheduled last (March) but this should occur early to ensure legal operating rights. To achieve cost leadership, XYZ should utilise global sourcing to access cheaper raw materials and components in Asia, leverage economies of scale by producing greater volumes once the new factory is operational, and invest in scanning and learning to adopt best-practice manufacturing techniques observed in Asian markets." },

  { id: "25e26", topic: "marketing", type: "extended", marks: 20, src: "2025 HSC , Section IV , Q26",
    stem: "Explain how target markets affect e-marketing, people, processes and physical evidence.",
    criteria: ["Explains how target markets influence e-marketing strategies (social media, website, SEO, online advertising)", "Explains how target markets influence people strategies in marketing (service staff training, customer-facing roles)", "Explains how target markets influence processes (how services are delivered, customer journey)", "Explains how target markets influence physical evidence (store design, packaging, online environment)", "Applies relevant case study/studies and presents a sustained, cohesive response"],
    sample: "Target markets are the specific groups of consumers a business aims to serve, and they fundamentally shape the extended marketing mix. In e-marketing, a young target market (18–25) drives investment in Instagram and TikTok advertising with short-form video content, while an older market (45+) may require email marketing and detailed website content. People — the customer-facing staff — must be trained and equipped to meet the expectations of the target market; a luxury target market demands highly knowledgeable, professional service staff. Processes must be designed around the target market's preferences; tech-savvy consumers expect seamless online checkout and instant chat support, while older markets may prefer phone-based support. Physical evidence — the tangible cues that communicate service quality — must align with target market expectations; a premium target market expects sophisticated store design and high-quality packaging. Businesses that carefully align each of these extended mix elements with their target market achieve higher customer satisfaction, stronger brand loyalty, and superior competitive positioning." },

  { id: "25e27", topic: "finance", type: "extended", marks: 20, src: "2025 HSC , Section IV , Q27",
    stem: "Explain how financial strategies can achieve liquidity and profitability objectives.",
    criteria: ["Explains how specific financial strategies achieve the liquidity objective (cash flow management, working capital strategies)", "Explains how specific financial strategies achieve the profitability objective (cost controls, revenue controls, profitability management)", "Distinguishes between liquidity and profitability as financial objectives", "Applies relevant case study/studies and contemporary business issues", "Presents a sustained, logical and cohesive response using relevant business terminology"],
    sample: "Liquidity and profitability are distinct but interrelated financial management objectives. Liquidity refers to the ability to meet short-term financial obligations; profitability measures the ability to generate returns above costs. Cash flow management strategies — such as offering discounts for early payment, factoring receivables, and managing payment schedules — improve liquidity by accelerating cash inflows. Working capital management, including leasing assets (preserving cash) and controlling current liabilities through overdraft management, also strengthens the liquidity position. Profitability strategies include cost controls such as expense minimisation, use of cost centres to identify inefficiencies, and variable cost management. Revenue controls through marketing objectives — increasing sales volume or price point — directly improve the gross profit ratio. Global financial management strategies such as hedging protect profit margins from exchange rate volatility. The challenge is that strategies pursuing liquidity (e.g. holding large cash reserves) may reduce profitability (idle cash earns no return), requiring businesses to carefully balance both objectives based on their stage of growth and financial environment." },

];


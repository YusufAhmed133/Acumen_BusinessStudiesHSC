import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HSC Business Studies Operations Notes | Band 6 | Acumen HSC",
  description:
    "Free HSC Business Studies Operations notes covering role of operations, influences, processes, contemporary issues. Band 6 aligned.",
  alternates: { canonical: "/notes/operations" },
};

export default function OperationsNotesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-sunken">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Free Notes
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-ink-900 sm:text-5xl">
            HSC Business Studies: Operations Notes
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
            Complete Band 6-aligned notes for the Operations topic. Covers every NESA syllabus
            dot point — role of operations, influences, processes, and contemporary issues.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="space-y-12 text-sm leading-relaxed text-ink-700">

          {/* Section 1 */}
          <section>
            <h2 className="font-display text-2xl font-bold text-ink-900">
              1. Role of Operations Management
            </h2>
            <p className="mt-4">
              Operations management is the business function responsible for transforming inputs
              into finished goods and services. It sits at the core of every business because
              without an effective production system, a business cannot deliver value to customers
              or sustain profitability.
            </p>
            <p className="mt-4">
              The operations function follows an{" "}
              <strong className="font-semibold text-ink-900">
                inputs → transformation process → outputs
              </strong>{" "}
              model:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong className="font-semibold text-ink-900">Inputs</strong> — the resources
                used in production. These include raw materials, labour, capital equipment,
                information, and time. A manufacturer like Toyota uses steel, components, and
                skilled workers. A service business like an airline uses aircraft, fuel, and
                trained cabin crew.
              </li>
              <li>
                <strong className="font-semibold text-ink-900">Transformation processes</strong> —
                the activities that convert inputs into outputs. This includes physical
                transformation (manufacturing a car), informational transformation (processing
                an insurance claim), and physiological transformation (a patient undergoing
                surgery). The goal is always to add value at each stage.
              </li>
              <li>
                <strong className="font-semibold text-ink-900">Outputs</strong> — the finished
                goods or services delivered to customers. Quality outputs that meet customer
                expectations are the primary measure of effective operations management.
              </li>
            </ul>
            <p className="mt-4">
              The operations manager&apos;s strategic role is to align the production system with
              the business&apos;s overall goals — whether that means lowering cost per unit,
              improving quality, or reducing lead times. In HSC essays, you need to link
              operations decisions back to competitive advantage and profitability.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-display text-2xl font-bold text-ink-900">
              2. Influences on Operations
            </h2>
            <p className="mt-4">
              Operations decisions do not happen in a vacuum. A range of internal and external
              forces shape how a business designs and manages its production system.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
              Globalisation
            </h3>
            <p className="mt-3">
              Globalisation has fundamentally changed operations by opening access to cheaper
              inputs, larger markets, and global supply chains. Businesses like Apple source
              components from dozens of countries and manufacture primarily in Asia to exploit
              lower labour costs. This creates efficiency gains but also introduces supply chain
              risk — as demonstrated by COVID-19&apos;s disruption to global semiconductor supply.
              For HSC purposes, globalisation influences operations through offshoring,
              outsourcing, and the need to manage geographically dispersed supply chains.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
              Technology
            </h3>
            <p className="mt-3">
              Technology affects every stage of the operations process. Automation reduces labour
              costs and improves consistency (a bottling plant uses automated lines to fill
              thousands of units per hour at near-zero defect rates). CAD/CAM software accelerates
              product development. Enterprise Resource Planning (ERP) systems like SAP integrate
              inventory, procurement, and production scheduling in real time. For service
              businesses, technology enables self-service models — think Qantas check-in kiosks
              — that reduce staffing costs while maintaining customer throughput.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
              Quality Expectations
            </h3>
            <p className="mt-3">
              Customers consistently raise the bar on quality. Businesses that fail to meet
              expectations face returns, warranty claims, and reputational damage. Quality
              expectations influence operations through the design of quality control systems,
              the adoption of international standards (ISO 9001), and decisions about which
              inputs to source. Premium brands like Mercedes-Benz deliberately select
              higher-cost inputs and tighter tolerances because their customers will pay for
              the output quality.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
              Cost-Based Competition
            </h3>
            <p className="mt-3">
              In price-sensitive markets, being a low-cost producer is a strategic necessity.
              Retailers like Aldi build their entire operations model around cost reduction —
              limited SKUs, private label products, no-frills store layouts, and high inventory
              turnover. Operations managers must continuously find ways to reduce cost per unit
              without sacrificing the quality level customers expect. Techniques include lean
              production, process standardisation, and supplier renegotiation.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
              Government Policies and Legal Regulation
            </h3>
            <p className="mt-3">
              Australian businesses operate within a complex regulatory environment. The{" "}
              <em>Fair Work Act 2009</em> governs minimum wages, working conditions, and
              industrial relations. The <em>Competition and Consumer Act 2010</em> sets
              product safety and consumer guarantee obligations. Environmental legislation
              — including the <em>National Greenhouse and Energy Reporting Act</em> — requires
              large emitters to monitor and report carbon output. Compliance with these
              regulations is a non-negotiable operating cost that shapes staffing ratios,
              workplace design, product testing protocols, and waste disposal procedures.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
              Environmental Sustainability
            </h3>
            <p className="mt-3">
              Sustainability has moved from a PR initiative to an operational imperative.
              Consumer pressure, investor ESG requirements, and government targets mean
              businesses must reduce waste, emissions, and resource use. Operations managers
              respond by redesigning processes to minimise waste (lean thinking), switching
              to renewable energy sources, introducing closed-loop supply chains, and
              selecting suppliers who meet sustainability criteria. Businesses that ignore
              this face regulatory penalties, reputational damage, and exclusion from
              government procurement.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-display text-2xl font-bold text-ink-900">
              3. Operations Processes
            </h2>

            <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
              Supply Chain Management
            </h3>
            <p className="mt-3">
              A supply chain is the network of suppliers, manufacturers, distributors, and
              retailers involved in getting a product to the end customer. Effective supply
              chain management (SCM) reduces cost, improves reliability, and enables faster
              response to market changes.
            </p>
            <p className="mt-3">
              Key SCM decisions include: selecting suppliers (cost vs. quality vs. reliability),
              managing inventory levels (holding cost vs. stockout risk), and logistics
              (warehousing, transport, and distribution). Qantas, for example, manages a
              global supply chain for aircraft parts — delays in any single component can
              ground a fleet, so redundancy and supplier diversification are critical.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
              Outsourcing
            </h3>
            <p className="mt-3">
              Outsourcing means contracting a third party to perform business functions that
              were previously done in-house. Businesses outsource to access specialist
              expertise, reduce fixed costs, and focus internal resources on core
              competencies. Nike outsources all manufacturing to contract factories, allowing
              it to concentrate on design and marketing — its true sources of competitive
              advantage. The risk is loss of quality control and dependency on external
              partners.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
              Technology and Innovation in Operations
            </h3>
            <p className="mt-3">
              Automation, robotics, and data analytics are transforming operations. Tesla&apos;s
              Gigafactories use highly automated assembly lines with robotic welding and
              painting. 3D printing enables rapid prototyping and on-demand manufacturing,
              reducing the need for large finished-goods inventories. For services, AI-powered
              demand forecasting allows retailers like Woolworths to optimise stock replenishment
              — reducing waste and improving product availability simultaneously.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
              Overseeing the Supply Chain
            </h3>
            <p className="mt-3">
              Modern supply chain oversight uses real-time tracking, supplier scorecards, and
              integrated ERP systems. Businesses set key performance indicators (KPIs) for
              suppliers — on-time delivery rate, defect rate, lead time — and review performance
              regularly. Where suppliers underperform, the business may switch, dual-source,
              or bring production in-house. Overseeing the supply chain is increasingly a
              risk management function as much as a cost-reduction one.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-display text-2xl font-bold text-ink-900">
              4. Key Management Approaches
            </h2>

            <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
              Total Quality Management (TQM)
            </h3>
            <p className="mt-3">
              TQM is a management philosophy that embeds quality improvement into every process
              and every employee. Rather than inspecting defects out at the end of the line,
              TQM prevents defects from occurring. Core principles include customer focus,
              continuous improvement (<em>kaizen</em>), employee empowerment, and process
              thinking. Toyota&apos;s famous production system is built on TQM principles —
              any worker can stop the production line if they identify a quality issue, which
              prevents defective units from progressing downstream.
            </p>
            <p className="mt-3">
              For HSC essays, TQM links to both quality management and cost reduction: fewer
              defects means less rework, lower warranty costs, and stronger customer retention.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
              Lean Production
            </h3>
            <p className="mt-3">
              Lean production focuses on eliminating waste (<em>muda</em>) from every step of
              the production process. The seven types of waste in lean thinking are:
              overproduction, waiting, transport, over-processing, inventory, motion, and
              defects. Lean businesses map their value streams and systematically remove
              non-value-adding steps. The result is faster throughput, lower costs, and
              more responsive production. Lean originated in Japanese manufacturing but is
              now applied in healthcare, retail, and financial services.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
              Just-in-Time (JIT)
            </h3>
            <p className="mt-3">
              Just-in-time inventory management means receiving materials and components only
              when they are needed for production — holding zero buffer stock. JIT dramatically
              reduces inventory holding costs and frees up working capital. It requires extremely
              reliable suppliers, accurate demand forecasting, and tight production scheduling.
              Toyota pioneered JIT; its suppliers are expected to deliver components in
              sequence to the assembly line within hours of a vehicle being ordered.
            </p>
            <p className="mt-3">
              The risk of JIT is vulnerability to supply chain disruptions. A single delayed
              shipment can halt production. Post-COVID, many manufacturers have shifted toward
              &quot;just-in-case&quot; inventory for critical components, accepting higher holding
              costs to reduce this exposure.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-display text-2xl font-bold text-ink-900">
              5. Contemporary Issues in Operations
            </h2>

            <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
              Global Factors
            </h3>
            <p className="mt-3">
              Contemporary operations management is shaped by global forces that did not
              exist a generation ago. Digital supply chains allow real-time inventory
              visibility across dozens of countries. E-commerce has compressed delivery
              expectations — customers now expect same-day or next-day fulfilment for
              standard goods. Geopolitical risk (US-China trade tensions, sanctions,
              tariffs) forces businesses to diversify sourcing away from single-country
              dependency. Currency volatility affects the cost of imported inputs and the
              competitiveness of exported goods.
            </p>
            <p className="mt-3">
              For Australian businesses, the tyranny of distance remains a real operations
              challenge. Higher logistics costs versus Asian competitors mean Australian
              manufacturers must compete on quality, specialisation, or service speed
              rather than price alone.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">
              Environmental Sustainability
            </h3>
            <p className="mt-3">
              Sustainable operations is no longer optional. The Australian federal government
              has committed to net-zero emissions by 2050, and the{" "}
              <em>Treasury Laws Amendment (Making Multinationals Pay Their Fair Share) Act</em>{" "}
              and mandatory climate reporting requirements (from 2024) mean large businesses
              must measure and disclose their operational emissions. Operational responses
              include energy efficiency programs, renewable energy sourcing, circular economy
              design (products designed for disassembly and recycling), and carbon offset
              purchasing.
            </p>
            <p className="mt-3">
              Businesses that invest early in sustainable operations gain cost advantages
              as carbon pricing increases, attract ESG-focused investors, and build brand
              differentiation with environmentally conscious consumers.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-xl border border-brand-200 bg-brand-50 p-8">
            <h2 className="font-display text-xl font-bold text-ink-900">
              Want a Band 6 tutor to walk you through this?
            </h2>
            <p className="mt-2 text-sm text-ink-500">
              Notes tell you what to know. A tutor shows you how to write it for full marks.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-block rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Book a free lesson →
            </Link>
          </section>

        </div>
      </article>
    </>
  );
}

"use strict";
(function () {
  try {
    var e =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    e.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var e =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "9806b8d4-c80a-441c-8998-513f1804bad3"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-9806b8d4-c80a-441c-8998-513f1804bad3"));
  })();
} catch {}
const R = require("../main-app.js"),
  g = [
    {
      id: "founder-executive",
      label: "Founder & Executive",
      userStory:
        "Start by removing an urgent research, sales, hiring, or admin burden; grow into repeatable company-wide workflows across those areas.",
      keywords: [
        "founder",
        "co-founder",
        "cofounder",
        "ceo",
        "chief executive officer",
        "executive",
        "business owner",
        "entrepreneur",
        "president",
        "managing director",
        "cto",
        "chief technology officer",
        "cpo",
        "chief product officer",
        "cmo",
        "chief marketing officer",
        "cro",
        "chief revenue officer",
        "coo",
        "chief operating officer",
        "cfo",
        "chief financial officer",
      ],
    },
    {
      id: "agency",
      label: "Agency",
      userStory:
        "Start with client research, pitches, or delivery work; grow into repeatable ways to win, serve, and report to clients.",
      keywords: [
        "agency",
        "agency owner",
        "creative agency",
        "marketing agency",
        "studio",
      ],
    },
    {
      id: "consultant",
      label: "Consultant",
      userStory:
        "Start with research, meetings, or a client deliverable; grow into reusable engagement processes that preserve the consultant’s judgment and style.",
      keywords: [
        "consultant",
        "consulting",
        "advisor",
        "advisory",
        "freelance consultant",
      ],
    },
    {
      id: "sales-business-development",
      label: "Sales & Business Development",
      userStory:
        "Start with sourcing, account research, or call preparation; grow into a connected pipeline from prospecting through follow-up and CRM hygiene.",
      keywords: [
        "sales",
        "bdr",
        "sdr",
        "sales development representative",
        "business development representative",
        "head of sales",
        "sales manager",
        "sales director",
        "vp sales",
        "vp of sales",
        "vice president of sales",
        "account executive",
        "account manager",
        "business development",
        "partnerships",
        "revenue",
        "cro",
        "chief revenue officer",
        "growth",
      ],
    },
    {
      id: "marketing-content",
      label: "Marketing & Content",
      userStory:
        "Start with a campaign, content asset, or analysis; grow into repeatable research, creation, distribution, and performance workflows.",
      keywords: [
        "marketing",
        "marketer",
        "growth",
        "growth marketing",
        "content marketing",
        "product marketing",
        "demand generation",
        "brand",
        "seo",
        "social media",
        "communications",
        "public relations",
        "lifecycle marketing",
        "content",
        "content creator",
        "cmo",
        "chief marketing officer",
      ],
    },
    {
      id: "recruiting-people",
      label: "Recruiting & People",
      userStory:
        "Start with sourcing, interview preparation, or onboarding; grow into a connected hiring and people-operations workflow.",
      keywords: [
        "recruiting",
        "recruiter",
        "talent",
        "talent acquisition",
        "talent partner",
        "sourcer",
        "recruiting coordinator",
        "people",
        "people operations",
        "people ops",
        "people partner",
        "head of people",
        "hr",
        "human resources",
        "hr manager",
        "chro",
      ],
    },
    {
      id: "customer-support-success",
      label: "Customer Support & Success",
      userStory:
        "Start with a customer call, support queue, or account brief; grow into reliable follow-up, insight, and support workflows.",
      keywords: [
        "customer support",
        "customer success",
        "customer service",
        "support",
        "customer experience",
        "account manager",
        "customer success manager",
        "customer support manager",
        "csm",
        "technical support",
        "support engineer",
      ],
    },
    {
      id: "operations-chief-of-staff",
      label: "Operations & Chief of Staff",
      userStory:
        "Start with one repetitive coordination or admin process; grow into dependable cross-team workflows, reporting, and routines.",
      keywords: [
        "operations",
        "ops",
        "operations manager",
        "chief of staff",
        "business operations",
        "business ops",
        "bizops",
        "strategy and operations",
        "program manager",
        "project manager",
        "pm",
        "business analyst",
        "general manager",
        "office manager",
        "executive assistant",
        "administrative assistant",
        "administration",
        "coo",
        "chief operating officer",
      ],
    },
    {
      id: "engineering-development",
      label: "Product & Engineering",
      userStory:
        "Start with customer context, planning, debugging, research, or a contained build task; grow into connected product and engineering workflows from insight through delivery.",
      keywords: [
        "product",
        "product manager",
        "pm",
        "head of product",
        "product owner",
        "cpo",
        "chief product officer",
        "product designer",
        "engineering",
        "engineer",
        "developer",
        "software engineer",
        "software developer",
        "frontend engineer",
        "front-end engineer",
        "backend engineer",
        "back-end engineer",
        "full stack engineer",
        "full-stack engineer",
        "engineering manager",
        "head of engineering",
        "vp engineering",
        "cto",
        "chief technology officer",
        "technical lead",
        "tech lead",
        "devops",
        "data engineer",
        "analytics engineer",
        "machine learning engineer",
        "ml engineer",
        "ai engineer",
        "qa engineer",
        "quality assurance",
      ],
    },
    {
      id: "data-analytics",
      label: "Data & Analytics",
      userStory:
        "Start by collecting, cleaning, or explaining data; grow into repeatable analysis and reporting workflows with trusted sources.",
      keywords: [
        "data",
        "analyst",
        "data analyst",
        "business analyst",
        "analytics",
        "analytics engineer",
        "business intelligence",
        "bi analyst",
        "data scientist",
        "data engineer",
        "machine learning engineer",
        "ml engineer",
        "ai engineer",
      ],
    },
    {
      id: "research-analysis",
      label: "Research & Analysis",
      userStory:
        "Start with a focused research question; grow into repeatable evidence gathering, synthesis, and polished outputs.",
      keywords: [
        "research",
        "researcher",
        "quantitative researcher",
        "qualitative researcher",
        "user researcher",
        "ux researcher",
        "analyst",
        "research analyst",
        "policy analyst",
        "market research",
        "market researcher",
        "competitive intelligence",
        "insights",
        "scientist",
      ],
    },
    {
      id: "design",
      label: "Design",
      userStory:
        "Start with research, critique, or a visual deliverable; grow into reusable discovery, creation, and review workflows.",
      keywords: [
        "design",
        "designer",
        "product designer",
        "ux",
        "ux designer",
        "ux researcher",
        "ui",
        "ui designer",
        "graphic designer",
        "brand designer",
        "web designer",
        "visual designer",
        "creative",
        "creative director",
        "instructional designer",
      ],
    },
    {
      id: "finance",
      label: "Finance",
      userStory:
        "Start with receipts, analysis, or a recurring report; grow into reliable finance operations with clear review points.",
      keywords: [
        "finance",
        "finance manager",
        "financial analyst",
        "accounting",
        "accountant",
        "cfo",
        "chief financial officer",
        "bookkeeping",
        "bookkeeper",
        "controller",
        "fp&a",
        "fp&a analyst",
        "investment analyst",
        "auditor",
        "audit",
        "treasury",
      ],
    },
    {
      id: "venture-capital",
      label: "Venture Capital & Investing",
      userStory:
        "Start with company research, market mapping, or a decision memo; grow into a repeatable investment process with traceable evidence and clear review points.",
      keywords: [
        "venture capital",
        "vc",
        "venture investor",
        "investor",
        "investing",
        "investment",
        "investment analyst",
        "private equity",
        "m&a",
        "mergers and acquisitions",
        "corporate development",
        "portfolio manager",
        "fund manager",
      ],
    },
    {
      id: "legal",
      label: "Legal",
      userStory:
        "Start with research, comparison, or document review; grow into consistent legal and compliance workflows that preserve human approval.",
      keywords: [
        "legal",
        "lawyer",
        "attorney",
        "counsel",
        "compliance",
        "paralegal",
        "contract manager",
        "legal operations",
        "legal ops",
        "privacy officer",
      ],
    },
    {
      id: "education",
      label: "Education",
      userStory:
        "Start with a lesson, explanation, or feedback task; grow into reusable teaching and preparation workflows.",
      keywords: [
        "education",
        "teacher",
        "educator",
        "professor",
        "instructor",
        "academic",
        "lecturer",
        "tutor",
        "trainer",
        "instructional designer",
        "curriculum",
        "learning and development",
      ],
    },
    {
      id: "student",
      label: "Student",
      userStory:
        "Start with research, planning, or understanding a difficult topic; grow into a repeatable study and creation workflow.",
      keywords: [
        "student",
        "undergraduate",
        "undergrad",
        "graduate student",
        "grad student",
        "phd student",
        "phd",
        "doctoral student",
        "doctoral candidate",
        "mba student",
        "mba",
      ],
    },
    {
      id: "writer-creator",
      label: "Writer & Creator",
      userStory:
        "Start with research, drafting, or repurposing; grow into a repeatable creation workflow that preserves the user’s voice.",
      keywords: [
        "writer",
        "creator",
        "content",
        "content creator",
        "journalist",
        "author",
        "copywriter",
        "editor",
        "creative",
        "producer",
        "podcaster",
        "blogger",
        "influencer",
        "filmmaker",
        "video creator",
        "youtuber",
      ],
    },
    {
      id: "other",
      label: "Other",
      userStory:
        "Start with the most concrete time-consuming task the user names, then preserve useful repetitions as user-owned skills.",
      keywords: ["other", "general", "personal", "not sure"],
    },
  ],
  N = new Set(["agency", "consultant"]),
  E = g.filter((e) => !N.has(e.id));
function k(e) {
  return g.find((r) => r.id === e) ?? g[g.length - 1];
}
function b(e) {
  return g.some((t) => t.id === e);
}
function y(e) {
  return e
    .normalize("NFKD")
    .toLocaleLowerCase()
    .replace(/[^a-z0-9&+ ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function x(e, t) {
  const r = Array.from({ length: t.length + 1 }, (i, n) => n);
  for (let i = 1; i <= e.length; i += 1) {
    const n = [i];
    for (let a = 1; a <= t.length; a += 1) {
      const s = e[i - 1] === t[a - 1] ? 0 : 1;
      n[a] = Math.min(n[a - 1] + 1, r[a] + 1, r[a - 1] + s);
    }
    r.splice(0, r.length, ...n);
  }
  return r[t.length];
}
function z(e, t) {
  if (e === t) return 100;
  if (t.startsWith(e)) return 92 - Math.min(12, t.length - e.length);
  if (e.startsWith(t)) return 88 - Math.min(12, e.length - t.length);
  if (t.includes(e)) return 82;
  if (e.includes(t)) return 78;
  const r = e.split(" "),
    i = t.split(" "),
    n = r.filter((s) => i.includes(s)).length;
  if (n > 0) return 55 + n * 8;
  const a = Math.max(e.length, t.length);
  return a === 0 ? 0 : Math.round((1 - x(e, t) / a) * 60);
}
function I(e, t = 6) {
  const r = y(e);
  return r
    ? g
        .map((i) => {
          let n = i.keywords[0],
            a = 0;
          for (const s of i.keywords) {
            const d = z(r, y(s));
            d > a && ((n = s), (a = d));
          }
          return { roleId: i.id, label: i.label, matchedKeyword: n, score: a };
        })
        .filter((i) => i.score >= 34)
        .sort((i, n) => n.score - i.score)
        .slice(0, t)
    : [];
}
const p = [
    { id: "company", label: "Company", collectsSize: !0 },
    { id: "agency", label: "Agency", collectsSize: !0 },
    { id: "consulting", label: "Consulting", collectsSize: !0 },
    { id: "independent", label: "Independent", collectsSize: !1 },
    { id: "education", label: "School", collectsSize: !1 },
    { id: "other", label: "Other", collectsSize: !1 },
  ],
  h = [
    { id: "1-10", label: "1–10" },
    { id: "11-100", label: "11–100" },
    { id: "101-1000", label: "101–1,000" },
    { id: "1000-plus", label: "1,000+" },
  ];
function v(e) {
  return p.find((t) => t.id === e) ?? p[0];
}
function A(e) {
  return h.find((t) => t.id === e) ?? h[0];
}
function _(e) {
  return p.some((t) => t.id === e);
}
function G(e) {
  return h.some((t) => t.id === e);
}
function O(e) {
  return e === "agency" ? ["agency"] : e === "consulting" ? ["consultant"] : [];
}
const w = [
    {
      id: "orbitra/consulting/getting-started-with-consulting-in-orbitra",
      icon: "chart",
      summary:
        "Ideas for winning clients, turning calls into proposals, reporting progress, and tracking time across clients.",
      tags: ["getting-started-guide"],
      useCases: [
        {
          roleId: "consultant",
          weight: 124,
          title: "Get started with consulting in Orbitra",
          message:
            "Show me how Orbitra can help with the consulting work in front of me, then help me complete one useful result.",
        },
        {
          roleId: "agency",
          weight: 124,
          title: "Get started with agency work in Orbitra",
          message:
            "Show me how Orbitra can help my agency win and serve clients, then help me complete one useful result.",
        },
      ],
      articlePublicSlug: "consulting",
    },
    {
      id: "orbitra/customer-support-success/getting-started-with-customer-support-and-success-in-orbitra",
      icon: "people",
      summary:
        "Choose a distinct Support or Customer Success path, connect the right context, and complete a useful first workflow.",
      tags: ["getting-started-guide"],
      useCases: [
        {
          roleId: "customer-support-success",
          weight: 122,
          title:
            "Getting Started with Customer Support and Success in Orbitra",
          message:
            "Show me the distinct Support and Customer Success paths in Orbitra, then help me choose a useful workflow from the customer work already in front of me.",
        },
        {
          roleId: "founder-executive",
          weight: 84,
          title: "Build a stronger customer workflow",
          message:
            "Help me choose a practical first workflow for customer requests, onboarding, account health, or recurring customer learning.",
        },
      ],
      articlePublicSlug: "customer-support-success",
    },
    {
      id: "orbitra/customer-support-success/set-up-support-like-orbitra",
      icon: "sparkles",
      summary:
        "Map the support stack, learn from resolved cases, prepare context and records, test focused skills, and propose reliable Routines.",
      tags: [],
      useCases: [
        {
          roleId: "customer-support-success",
          weight: 118,
          title: "Set up a connected support system",
          message:
            "Set up our customer-support system using the Orbitra playbook. Show me the roadmap first, inspect what we already use and our resolved cases, then prepare changes for review before connecting tools or creating records, skills, or Routines.",
        },
        {
          roleId: "operations-chief-of-staff",
          weight: 90,
          title: "Build a reliable support workflow",
          message:
            "Help us map and prepare a reliable support workflow across our current tools, records, policies, approvals, and team handoffs before we automate it.",
        },
        {
          roleId: "founder-executive",
          weight: 88,
          title: "Rebuild how our team runs Support",
          message:
            "Use the Orbitra support playbook to show me what our team should keep, change, and test before we automate customer support.",
        },
      ],
    },
    {
      id: "orbitra/founder-executive/getting-started-as-a-founder-in-orbitra",
      icon: "lightbulb",
      summary:
        "Choose a useful first founder workflow, then connect company reviews, meetings, customer growth, fundraising, research, and team follow-through over time.",
      tags: ["getting-started-guide"],
      useCases: [
        {
          roleId: "founder-executive",
          weight: 124,
          title: "Getting Started as a Founder in Orbitra",
          message:
            "Help me choose the most useful place to start in Orbitra from the company work already in front of me.",
        },
      ],
      articlePublicSlug: "founder-executive",
    },
    {
      id: "orbitra/marketing/audit-seo-create-report",
      icon: "chart",
      summary:
        "Audit a website's search performance and turn technical, content, and competitive findings into a prioritized report with practical next actions.",
      tags: [],
      useCases: [
        {
          roleId: "marketing-content",
          weight: 104,
          title: "Audit our SEO and create a clear action plan",
          message:
            "I want to audit our SEO and get a clear, prioritized action plan.",
        },
        {
          roleId: "agency",
          weight: 106,
          title: "Audit a client’s SEO and create a beautiful report",
          message:
            "I want to audit a client’s SEO and create a beautiful, actionable report.",
        },
        {
          roleId: "consultant",
          weight: 88,
          title: "Audit a company’s SEO and create a clear report",
          message:
            "I want to audit a company’s SEO and create a clear, actionable report.",
        },
      ],
      articlePublicSlug: "ai-seo-audit",
    },
    {
      id: "orbitra/marketing/getting-started-with-marketing-in-orbitra",
      icon: "sparkles",
      summary:
        "Choose a useful first marketing workflow, then connect audience evidence, competitor research, SEO, reporting, content, and distribution over time.",
      tags: ["getting-started-guide"],
      useCases: [
        {
          roleId: "marketing-content",
          weight: 120,
          title: "Getting Started with Marketing in Orbitra",
          message:
            "Help me choose the most useful marketing workflow from the work and context already in front of me.",
        },
      ],
      articlePublicSlug: "marketing",
    },
    {
      id: "orbitra/marketing/run-competitor-analysis",
      icon: "chart",
      summary:
        "Compare competitors with current, source-linked evidence and turn the findings into implications for a real business decision.",
      tags: [],
      useCases: [
        {
          roleId: "marketing-content",
          weight: 104,
          title: "Run a competitor analysis",
          message:
            "Help me compare our top competitors and explain what the evidence means for our positioning and next decisions.",
        },
        {
          roleId: "agency",
          weight: 100,
          title: "Run a sourced competitor analysis for a client",
          message:
            "Help me compare this client's competitors using the client's approved context and public evidence. Keep observed facts, hypotheses, and recommendations separate.",
        },
      ],
      articlePublicSlug: "ai-marketing-competitor-analysis",
    },
    {
      id: "orbitra/operations/build-client-progress-report-project-tools",
      icon: "chart",
      summary:
        "Pull project updates and email context into a clean client report.",
      tags: [],
      useCases: [
        {
          roleId: "operations-chief-of-staff",
          weight: 76,
          title: "Build a client progress report from your project tools",
          message:
            "Help me put together a client progress report. Ask me which client and which time period to cover. Then pull relevant updates from my project tools and the email thread with the client, and draft a clean report I can send or present.",
        },
        {
          roleId: "agency",
          weight: 104,
          title: "Build one client’s marketing performance report",
          message:
            "Help me reconcile one client's project, analytics, advertising, and communication context into a reviewable performance report. Keep this client's accounts and data separate from every other account.",
        },
      ],
      articlePublicSlug: "ai-client-progress-reports",
    },
    {
      id: "orbitra/operations/getting-started-with-operations-in-orbitra",
      icon: "sparkles",
      summary:
        "Choose a useful Operations workflow from the work already in front of you and build toward a connected way of working over time.",
      tags: ["getting-started-guide"],
      useCases: [
        {
          roleId: "operations-chief-of-staff",
          weight: 120,
          title: "Get started with Operations in Orbitra",
          message:
            "Show me how my Orbitra companion can help with the Operations work already in front of me, then recommend the best place to begin.",
        },
        {
          roleId: "founder-executive",
          weight: 94,
          title: "Build a more connected Operations workflow",
          message:
            "Help me choose one useful Operations task for my Orbitra companion and show me how it could grow into a connected workflow.",
        },
        {
          roleId: "other",
          weight: 82,
          title: "Get help with Operations work",
          message:
            "Look at the Operations work I have in front of me and help me choose one useful place to start in Orbitra.",
        },
      ],
      articlePublicSlug: "operations",
    },
    {
      id: "orbitra/operations/organize-receipts-bookkeeping",
      icon: "receipt",
      summary:
        "Gather invoices, receipts, and payment evidence, build a traceable register, and prepare a clean finance review handoff.",
      tags: [],
      useCases: [
        {
          roleId: "finance",
          weight: 108,
          title: "Organize invoices, receipts, and bookkeeping",
          message:
            "Gather the invoices, receipts, and payment evidence for this period, build a traceable register, and prepare the missing and ambiguous items for review.",
        },
        {
          roleId: "operations-chief-of-staff",
          weight: 88,
          title: "Find receipts and organize bookkeeping",
          message: "I want to find receipts and organize our bookkeeping.",
        },
        {
          roleId: "founder-executive",
          weight: 94,
          title: "Take receipts and bookkeeping off my plate",
          message: "I want to take receipts and bookkeeping off my plate.",
        },
        {
          roleId: "other",
          weight: 82,
          title: "Find my receipts and organize my bookkeeping",
          message: "I want to find my receipts and organize my bookkeeping.",
        },
      ],
      articlePublicSlug: "ai-invoice-receipt-bookkeeping",
    },
    {
      id: "orbitra/operations/triage-my-inbox",
      icon: "inbox",
      summary:
        "Prioritize an email, LinkedIn, or other inbox, draft replies, and review the cleanup that would bring it under control.",
      tags: [],
      useCases: [
        {
          roleId: "operations-chief-of-staff",
          weight: 114,
          title: "Triage an inbox",
          message:
            "Help me triage this inbox. Bring forward what needs attention, draft the useful replies, and show me any cleanup or delegation before taking action.",
        },
        {
          roleId: "founder-executive",
          weight: 92,
          title: "Bring an inbox under control",
          message:
            "Review the communication queue I choose and help me deal with the important messages without treating every unread item as urgent.",
        },
        {
          roleId: "other",
          weight: 80,
          title: "Sort incoming messages",
          message:
            "Prioritize this email, LinkedIn, or messaging inbox and prepare the replies, follow-ups, and cleanup I should review.",
        },
      ],
      articlePublicSlug: "ai-inbox-triage",
    },
    {
      id: "orbitra/product-engineering/getting-started-with-product-engineering-in-orbitra",
      icon: "code",
      summary:
        "Choose a useful first workflow, then connect customer evidence, product specs, metrics, product-flow audits, grounded bug reports, and team follow-through.",
      tags: ["getting-started-guide"],
      useCases: [
        {
          roleId: "engineering-development",
          weight: 120,
          title: "Getting Started with Product and Engineering in Orbitra",
          message:
            "Help me choose the most useful product or engineering workflow from the problem and context already in front of me.",
        },
      ],
      articlePublicSlug: "product-engineering",
    },
    {
      id: "orbitra/recruiting/getting-started-with-recruiting-in-orbitra",
      icon: "people",
      summary:
        "Choose the right Orbitra workflow for defining jobs, mapping talent, sourcing, application review, interviews, feedback, outreach, and pipeline follow-through.",
      tags: ["getting-started-guide"],
      useCases: [
        {
          roleId: "recruiting-people",
          weight: 120,
          title: "Get started with recruiting in Orbitra",
          message:
            "Show me the best place to start with recruiting in Orbitra for the hiring decision in front of me.",
        },
        {
          roleId: "founder-executive",
          weight: 90,
          title: "Build a better hiring workflow",
          message:
            "Help me choose the right Orbitra workflow for our next key hire.",
        },
      ],
      articlePublicSlug: "recruiting",
    },
    {
      id: "orbitra/research-analysis/create-beautiful-slide-deck",
      icon: "presentation",
      summary:
        "Turn a topic, source material, or body of work into a polished visual slide deck. Use when the user wants a pitch, report, presentation, portfolio, achievement deck, or other narrative presentation rather than a plain text document.",
      tags: [],
      useCases: [
        {
          roleId: "marketing-content",
          weight: 86,
          title: "Create a beautiful, on-brand slide deck",
          message: "I want to create a beautiful, on-brand slide deck.",
        },
        {
          roleId: "design",
          weight: 90,
          title: "Turn my ideas into a polished visual story",
          message:
            "I want to turn my ideas into a polished visual story and slide deck.",
        },
        {
          roleId: "writer-creator",
          weight: 86,
          title: "Turn my work into a beautiful slide deck",
          message: "I want to turn my work into a beautiful slide deck.",
        },
        {
          roleId: "consultant",
          weight: 96,
          title: "Create a polished client presentation",
          message:
            "Turn this reviewed proposal, recommendation, or body of client work into a polished, evidence-grounded slide deck.",
        },
        {
          roleId: "sales-business-development",
          weight: 94,
          title: "Turn account research into a beautiful sales deck",
          message:
            "Turn this accepted account research into a polished, evidence-grounded sales deck.",
        },
        {
          roleId: "agency",
          weight: 92,
          title: "Create a beautiful client pitch deck",
          message:
            "Turn this accepted client or prospect research into a polished pitch deck.",
        },
        {
          roleId: "research-analysis",
          weight: 84,
          title: "Turn an accepted brief into a beautiful deck",
          message:
            "Turn this accepted research brief into a polished, source-grounded slide deck.",
        },
        {
          roleId: "other",
          weight: 94,
          title: "Create a beautiful slide deck for me",
          message: "I want to create a beautiful slide deck.",
        },
        {
          roleId: "student",
          weight: 88,
          title: "Present work I have finished",
          message:
            "Turn work I have already finished into a clear, well-designed presentation I can actually present.",
        },
        {
          roleId: "data-analytics",
          weight: 80,
          title: "Present findings to stakeholders",
          message:
            "Turn this accepted analysis into a presentation that leads with the finding and keeps the evidence traceable.",
        },
        {
          roleId: "education",
          weight: 92,
          title: "Turn a lesson into presentable material",
          message:
            "Turn this lesson or topic into clear teaching material I can present.",
        },
      ],
      articlePublicSlug: "ai-slide-decks",
    },
    {
      id: "orbitra/research-analysis/extract-web-data",
      icon: "files",
      summary:
        "Research websites and extract repeated structured information into a clean spreadsheet or dataset. Use for company lists, market maps, directories, public records, product comparisons, or other research requiring tens or hundreds of consistent rows.",
      tags: [],
      useCases: [
        {
          roleId: "data-analytics",
          weight: 112,
          title: "Turn websites into a clean spreadsheet",
          message:
            "I want to extract structured data from websites into a clean spreadsheet.",
        },
        {
          roleId: "research-analysis",
          weight: 106,
          title: "Collect hundreds of research rows from the web",
          message:
            "I want to collect hundreds of structured research rows from the web.",
        },
        {
          roleId: "consultant",
          weight: 96,
          title: "Research hundreds of companies into a spreadsheet",
          message:
            "I want to research hundreds of companies into a clean spreadsheet.",
        },
        {
          roleId: "agency",
          weight: 92,
          title: "Build a clean dataset for my client",
          message:
            "I want to research the web and build a clean dataset for my client.",
        },
        {
          roleId: "other",
          weight: 84,
          title: "Turn websites into a clean spreadsheet",
          message:
            "I want to extract structured data from websites into a clean spreadsheet.",
        },
        {
          roleId: "student",
          weight: 90,
          title: "Build a dataset for a project or dissertation",
          message:
            "Collect these repeated fields across the sources I need into one clean, checkable spreadsheet.",
        },
        {
          roleId: "legal",
          weight: 84,
          title: "Collect repeated records across many sources",
          message:
            "Collect the same fields across these registers, filings, or case records into one validated table with a source link per row.",
        },
      ],
      articlePublicSlug: "ai-data-extraction",
    },
    {
      id: "orbitra/research-analysis/getting-started-with-research-analysis-in-orbitra",
      icon: "books",
      summary:
        "Get started with research in Orbitra by gathering evidence, building datasets, and explaining findings.",
      tags: ["getting-started-guide"],
      useCases: [
        {
          roleId: "research-analysis",
          weight: 120,
          title: "Getting Started with Research and Analysis in Orbitra",
          message:
            "I want to get started with research in Orbitra and build a repeatable workflow.",
        },
        {
          roleId: "data-analytics",
          weight: 92,
          title: "Getting Started with Research and Analysis in Orbitra",
          message:
            "I want to get started with analysis in Orbitra and build a repeatable workflow.",
        },
        {
          roleId: "finance",
          weight: 84,
          title: "Research a financial question",
          message:
            "Research this company, market, or investment question and turn current sources into a cited brief, comparison, spreadsheet, or map.",
        },
      ],
      articlePublicSlug: "research-analysis",
    },
    {
      id: "orbitra/sales/getting-started-with-sales-in-orbitra",
      icon: "chart",
      summary:
        "See how your companion can help across the sales journey, choose a useful first task, and build toward a connected sales setup over time.",
      tags: ["getting-started-guide"],
      useCases: [
        {
          roleId: "sales-business-development",
          weight: 120,
          title: "Getting Started with Sales in Orbitra",
          message:
            "Help me get started with sales in Orbitra. Show me what's possible, then help me choose one useful place to begin.",
        },
        {
          roleId: "founder-executive",
          weight: 96,
          title: "Getting Started with Sales in Orbitra",
          message:
            "Help me use my Orbitra companion for founder-led sales. Show me the bigger picture, then help me choose one useful place to begin.",
        },
        {
          roleId: "agency",
          weight: 88,
          title: "Getting Started with Sales in Orbitra",
          message:
            "Help me use my Orbitra companion to find, win, and follow through with clients. Show me what's possible, then help me choose a useful first task.",
        },
        {
          roleId: "consultant",
          weight: 84,
          title: "Getting Started with Sales in Orbitra",
          message:
            "Help me use my Orbitra companion to find and work with clients. Show me what's possible, then help me choose a useful first task.",
        },
      ],
      articlePublicSlug: "automate-sales-pipeline",
    },
  ],
  T = w
    .filter((e) => e.tags.includes("getting-started-guide"))
    .map((e) => ({
      id: e.id,
      kind: "getting-started",
      icon: e.icon,
      description: e.summary,
      roles: e.useCases,
    }));
function M(e) {
  return T.find((t) => t.id === e);
}
const C = w
  .filter((e) => !e.tags.includes("getting-started-guide"))
  .map((e) => ({
    id: e.id,
    kind: "official-skill",
    icon: e.icon,
    description: e.summary,
    tags: e.tags,
    roles: e.useCases,
  }));
function P(e) {
  return C.find((t) => t.id === e);
}
const m = [...T, ...C];
function D(e, t) {
  const r = P(e) ?? M(e);
  if (!r) return;
  const i = t.length > 0 ? t : ["other"],
    n = r.roles
      .filter((d) => i.includes(d.roleId))
      .sort((d, o) => o.weight - d.weight)[0],
    a = r.roles.find((d) => d.roleId === "other"),
    s = n ?? a ?? r.roles[0];
  if (s)
    return {
      id: r.id,
      kind: r.kind,
      icon: r.icon,
      description: "description" in r ? r.description : void 0,
      roleId: s.roleId,
      title: s.title,
      message: s.message,
      weight: s.weight,
    };
}
function f(e) {
  return m
    .flatMap((t) => {
      const i = t.roles
        .filter((n) => e.includes(n.roleId))
        .sort((n, a) => a.weight - n.weight)[0];
      return i
        ? [
            {
              id: t.id,
              kind: t.kind,
              icon: t.icon,
              description: "description" in t ? t.description : void 0,
              roleId: i.roleId,
              title: i.title,
              message: i.message,
              weight: i.weight,
            },
          ]
        : [];
    })
    .sort((t, r) => r.weight - t.weight);
}
function L(e, t = 6, r = {}) {
  const i = f(e),
    n = f(["other"]),
    a = m
      .flatMap((c) => {
        const u = D(c.id, e);
        return u ? [u] : [];
      })
      .sort((c, u) => u.weight - c.weight),
    s = new Set(),
    d = [],
    o = r.maxGettingStarted ?? Number.POSITIVE_INFINITY;
  let l = 0;
  for (const c of [...i, ...n, ...a])
    if (!s.has(c.id)) {
      if (c.kind === "getting-started") {
        if (l >= o) continue;
        l += 1;
      }
      if ((s.add(c.id), d.push(c), d.length === t)) break;
    }
  return d;
}
const F = m,
  B = "00100679-e19e-47ef-9637-53843482a51d",
  S = 3;
function H(e) {
  const t = I(e.roleTitle || e.role || "")
      .filter((i) => i.score >= 78)
      .map((i) => i.roleId),
    r = e.organizationTypeId ? O(e.organizationTypeId) : [];
  return [...new Set([...e.roleIds, ...t, ...r])];
}
const j = {
  name: "",
  roleTitle: "",
  roleIds: [],
  roleMatches: [],
  company: "",
  organizationTypeId: null,
  organizationSizeId: null,
  organizationTypeOther: "",
  selectedOfficialSkillIds: [],
  officialSkillMessage: "",
  officialSkillMessageEdited: !1,
  accountName: "",
  accountEmail: "",
  targetProfileId: null,
  mainBrowserProfileId: null,
  aiHistoryImportSources: [],
  stepsCompleted: 0,
  wentBackCount: 0,
};
function q(e) {
  const t = e.organizationTypeId;
  let r = null;
  if (t != null) {
    const o = `${t}`;
    _(o) ? (r = o) : o === "government" && (r = "other");
  }
  const i = Array.from(
      new Set(
        (e.roleIds ?? []).flatMap((o) => {
          const l =
            `${o}` == "product-management" ? "engineering-development" : `${o}`;
          return b(l) ? [l] : [];
        }),
      ),
    ).slice(0, S),
    n = (e.roleMatches ?? [])
      .flatMap((o) => {
        const l =
          `${o.roleId}` == "product-management"
            ? "engineering-development"
            : `${o.roleId}`;
        if (!b(l)) return [];
        const c = k(l).keywords.find((u) => u === `${o.matchedKeyword}`);
        return c ? [{ roleId: l, matchedKeyword: c }] : [];
      })
      .slice(0, S),
    a =
      r && v(r).collectsSize && e.organizationSizeId && G(e.organizationSizeId)
        ? e.organizationSizeId
        : null,
    s = Array.from(
      new Set(
        (e.selectedOfficialSkillIds ?? []).flatMap((o) => {
          const l = m.find((c) => c.id === `${o}`);
          return l ? [l.id] : [];
        }),
      ),
    ),
    d = Array.from(
      new Set(
        (e.aiHistoryImportSources ?? []).flatMap((o) => {
          const l = R.ONBOARDING_AI_HISTORY_SOURCES.find((c) => c === `${o}`);
          return l ? [l] : [];
        }),
      ),
    );
  return {
    ...j,
    ...e,
    roleTitle: e.roleTitle || e.role || "",
    roleIds: i,
    roleMatches: n,
    organizationTypeId: r,
    organizationSizeId: a,
    organizationTypeOther: e.organizationTypeOther ?? "",
    selectedOfficialSkillIds: s,
    aiHistoryImportSources: d,
  };
}
exports.DEFAULT_ONBOARDING_COMPANION_VISUALS_SEED = B;
exports.ONBOARDING_RECOMMENDATIONS = F;
exports.ONBOARDING_ROLE_DEFINITIONS = E;
exports.ORGANIZATION_SIZE_DEFINITIONS = h;
exports.ORGANIZATION_TYPE_DEFINITIONS = p;
exports.bundledOfficialSkillDiscoveryEntries = w;
exports.getOnboardingRecommendationRoleIds = H;
exports.getOrganizationCatalogRoleIds = O;
exports.getOrganizationSizeDefinition = A;
exports.getOrganizationTypeDefinition = v;
exports.getRoleDefinition = k;
exports.matchRoles = I;
exports.normalizeOnboardingFormData = q;
exports.rankForRoles = f;
exports.rankOfficialSkillRecommendations = L;

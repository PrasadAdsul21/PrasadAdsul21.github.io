// app/lib/data.ts
// Single source of truth for all portfolio content

export const PERSONAL = {
  name: "Prasad Adsul",
  title: "Software Engineer",
  tagline: "Software Engineer | .NET & Backend Engineering | AI/GenAI Integration",
  shortBio:
    "I build maintainable backend applications, REST APIs, and data-driven software systems using C#, ASP.NET Core, and SQL. I also integrate AI capabilities into applications through LLMs, retrieval-based systems, and intelligent automation.",
  location: "Pune, Maharashtra, India",
  email: "prasadadsul81@gmail.com",
  github: "https://github.com/PrasadAdsul21",
  linkedin: "https://in.linkedin.com/in/prasadadsul217812",
  cv: "/Prasad_Adsul_DotNet-AI_Engineer_CV.pdf",
  avatar: "/profile.jpeg",
  education: {
    degree: "M.S. in Computer Science",
    institution: "Savitribai Phule Pune University",
  },
  experience: "2+ years",
  availableForWork: true,
};

export const PROJECTS = [
  {
    id: "o-medical-visa",
    title: "O Medical Visa",
    category: "Enterprise Healthcare Workflow",
    type: "Professional Project",
    provenance:
      "Professional enterprise project — source code is private. Description based on CV and direct experience.",
    shortDescription:
      "A multi-module web application for managing medical visa workflows, patient coordination, and administrative processes for a healthcare organization.",
    problem:
      "Healthcare organizations managing international medical visa cases need a reliable, maintainable system to handle patient intake, status tracking, document management, and cross-department coordination. Paper-based or ad-hoc processes create delays, compliance risks, and data inconsistencies.",
    technologies: [
      "C#",
      ".NET",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "SQL Server",
      "Angular",
      "TypeScript",
      "HTML",
      "CSS",
      "Clean Architecture",
      "REST APIs",
    ],
    myContributions: [
      "Designed and implemented RESTful API endpoints for patient intake, status tracking, and document management workflows",
      "Applied Clean Architecture with separation between domain models, application services, infrastructure concerns, and API controllers",
      "Implemented Entity Framework Core data models and migrations for the SQL Server database schema",
      "Contributed to Angular frontend components consuming backend APIs for workflow management screens",
      "Participated in code reviews and maintained documentation for API contracts and data models",
    ],
    architecture: {
      overview:
        "The application follows Clean Architecture, separating concerns across Domain, Application, Infrastructure, and API layers. The backend is an ASP.NET Core Web API serving Angular frontend clients.",
      layers: [
        {
          name: "API Layer (ASP.NET Core Web API)",
          description:
            "Controllers handle HTTP routing, input validation, and response formatting. Each controller maps to a specific workflow domain.",
        },
        {
          name: "Application Layer",
          description:
            "Contains service interfaces, DTOs, and use-case orchestration logic. Business rules live here, not in the API controllers.",
        },
        {
          name: "Domain Layer",
          description:
            "Core entities and domain logic, independent of infrastructure. Entities represent medical visa cases, patients, and workflow states.",
        },
        {
          name: "Infrastructure Layer",
          description:
            "Entity Framework Core DbContext, repositories, and data access implementations targeting SQL Server.",
        },
        {
          name: "Frontend (Angular)",
          description:
            "Angular application consuming the REST API. Organized into feature modules with TypeScript services handling HTTP communication.",
        },
      ],
    },
    challenges: [
      "Maintaining data consistency across multi-step workflows that involve different departments and status transitions",
      "Designing an API that can accommodate evolving workflow requirements without breaking existing consumers",
      "Enforcing data validation and business rules at the application layer rather than relying on database constraints alone",
    ],
    githubUrl: null,
    demoUrl: null,
    featured: true,
    coverImage: "/OMedicalVisa_Img1.jpg",
    images: ["/OMedicalVisa_Img1.jpg", "/OMedicalVisa_Img2.jpg", "/OMedicalVisa_Img3.jpg"],
    tags: ["Healthcare", "Enterprise", "Backend", ".NET", "API"],
  },
  {
    id: "task-resource-management",
    title: "Task Tracking & Resource Management POC",
    category: "Knowledge Graph & AI Application",
    type: "Proof of Concept",
    provenance:
      "Internal proof-of-concept project. Description based on CV. Source code is not publicly available.",
    shortDescription:
      "A proof-of-concept system using Neo4j knowledge graphs and GenAI to model employee skills, project requirements, and task assignments for intelligent resource planning recommendations.",
    problem:
      "Matching the right engineers to tasks based on skills, availability, and project needs is time-consuming and error-prone when done manually. A graph-based data model can represent the relationships between employees, skills, projects, and tasks more naturally than relational tables, and generative AI can surface relevant recommendations from this graph.",
    technologies: [
      "Python",
      "Neo4j",
      "Knowledge Graphs",
      "Cypher",
      "GenAI",
      "REST APIs",
      "OpenSearch",
      "GraphRAG",
    ],
    myContributions: [
      "Designed the graph data model: nodes for Employees, Skills, Projects, and Tasks with typed relationships",
      "Implemented Cypher queries to retrieve resource availability, skill matching, and project assignment data",
      "Integrated GenAI capabilities to surface recommendations based on graph traversal results",
      "Exposed graph query results through REST API endpoints for consumption by a frontend or orchestration layer",
      "Explored OpenSearch integration for full-text retrieval alongside graph-based structured queries",
    ],
    architecture: {
      overview:
        "Neo4j stores the knowledge graph of employees, skills, projects, and tasks. A Python backend runs Cypher queries against Neo4j and optionally calls a generative AI model to produce natural-language recommendations. REST APIs expose the functionality.",
      layers: [
        {
          name: "Graph Database (Neo4j)",
          description:
            "Stores entities and relationships. Cypher queries traverse the graph to find skill matches, project requirements, and assignment conflicts.",
        },
        {
          name: "Python Application Backend",
          description:
            "Orchestrates graph queries, processes results, and interacts with generative AI models to produce recommendations.",
        },
        {
          name: "GenAI Integration",
          description:
            "Generative AI model receives graph query results as context and produces human-readable resource planning suggestions.",
        },
        {
          name: "REST API Layer",
          description:
            "Exposes endpoints for querying resource availability, skill matching, and assignment recommendations.",
        },
      ],
    },
    challenges: [
      "Designing a graph schema that accurately reflects the many-to-many relationships between employees, skills, and projects",
      "Writing efficient Cypher queries for multi-hop traversals across the knowledge graph",
      "Ensuring GenAI recommendations are grounded in actual graph data to avoid hallucinations",
      "This is a POC: recommendations are not production-validated or claimed to be objectively optimal",
    ],
    githubUrl: null,
    demoUrl: null,
    featured: true,
    coverImage: "/TaskTrackingPOC_Img1.jpg",
    images: ["/TaskTrackingPOC_Img1.jpg", "/TaskTrackingPOC_Img2.jpg"],
    tags: ["Knowledge Graph", "AI/GenAI", "Neo4j", "Python", "Graph Database"],
  },
  {
    id: "agent-support-bot",
    title: "Agent Support Bot",
    category: "LLM-Powered Support Application",
    type: "AI Integration Project",
    provenance:
      "Project experience from CV. Implementation details describe the general architecture; specific components may be verified against actual code upon request.",
    shortDescription:
      "An LLM-powered support assistant that uses retrieval-augmented generation (RAG) to provide contextually relevant answers by retrieving relevant documents before generating responses.",
    problem:
      "Generic LLM responses lack specificity and may hallucinate when answering domain-specific support queries. By retrieving relevant documentation or knowledge base content before generation, a RAG-based bot can produce answers grounded in actual, available information.",
    technologies: [
      "Python",
      "FastAPI",
      "Llama 3",
      "RAG",
      "Vector Search",
      "NLP",
      "REST APIs",
      "LangChain",
    ],
    myContributions: [
      "Implemented the document ingestion pipeline: loading, chunking, and embedding documents into a vector store",
      "Built the retrieval step: embedding user queries and performing similarity search to find relevant document chunks",
      "Integrated with Llama 3 to generate responses conditioned on retrieved context",
      "Exposed the RAG pipeline through a FastAPI REST API",
      "Experimented with prompt engineering to improve answer quality and reduce hallucination",
    ],
    architecture: {
      overview:
        "Documents are chunked and embedded into a vector store at ingestion time. At query time, the user's question is embedded, semantically similar chunks are retrieved, and a language model generates an answer using retrieved context as a grounding prompt.",
      layers: [
        {
          name: "Document Ingestion",
          description:
            "Documents are loaded, split into chunks, and embedded using an embedding model. Embeddings are stored in a vector database.",
        },
        {
          name: "Retrieval",
          description:
            "User query is embedded and compared against stored embeddings using cosine similarity or ANN search to retrieve the most relevant chunks.",
        },
        {
          name: "Generation (Llama 3)",
          description:
            "Retrieved chunks are combined with the query into a prompt sent to Llama 3, which produces a grounded response.",
        },
        {
          name: "FastAPI REST API",
          description:
            "Exposes the query endpoint. Handles request validation, orchestrates retrieval and generation, and returns structured responses.",
        },
      ],
    },
    challenges: [
      "Retrieval quality depends heavily on chunk size, overlap, and embedding model selection",
      "Hallucinations can still occur when retrieved chunks are insufficient or misleading",
      "Evaluating RAG quality requires systematic testing with representative queries",
      "Latency considerations when chaining retrieval and generation steps",
    ],
    knownLimitations: [
      "Retrieval quality is not formally evaluated with metrics like RAGAS or context precision in this POC",
      "No access control on which documents are retrieved per user",
      "Response latency depends on model inference speed",
    ],
    githubUrl: null,
    demoUrl: null,
    featured: true,
    coverImage: "/AgentSupportBot_Img1.jpg",
    images: ["/AgentSupportBot_Img1.jpg", "/AgentSupportBot_Img2.jpg"],
    tags: ["LLM", "RAG", "Python", "FastAPI", "AI/GenAI"],
  },
  {
    id: "document-ocr-ai",
    title: "Document OCR-AI",
    category: "Document Intelligence",
    type: "AI Integration Project",
    provenance:
      "Project experience from CV. Description based on CV. Specific OCR engine, accuracy metrics, and processing volumes are not claimed without supporting evidence.",
    shortDescription:
      "A document processing pipeline that combines OCR (optical character recognition) with NLP and AI models to extract structured information from unstructured documents.",
    problem:
      "Organizations deal with large volumes of unstructured documents — invoices, contracts, forms, reports — that require manual reading and data entry. A pipeline combining OCR, NLP, and AI models can automate information extraction and reduce manual effort.",
    technologies: [
      "Python",
      "Node.js",
      "JavaScript",
      "OCR",
      "NLP",
      "Hugging Face Transformers",
      "AWS",
      "REST APIs",
      "SQL Server",
    ],
    myContributions: [
      "Built the document ingestion and preprocessing pipeline",
      "Integrated OCR capabilities to extract raw text from uploaded documents",
      "Applied NLP models from Hugging Face Transformers for entity extraction and classification",
      "Designed the REST API for document submission, processing status, and result retrieval",
      "Stored extracted structured data in SQL Server for downstream consumption",
      "Explored AWS services for document storage and processing workflow orchestration",
    ],
    architecture: {
      overview:
        "Documents are uploaded via a REST API, preprocessed (image enhancement, deskewing), passed through an OCR engine to extract raw text, then processed by NLP models to identify and classify entities. Extracted structured data is persisted to SQL Server.",
      layers: [
        {
          name: "Document Ingestion API",
          description:
            "REST API endpoint accepting document uploads. Validates file type and size, stores documents, and queues them for processing.",
        },
        {
          name: "OCR Processing",
          description:
            "Converts document images or PDFs to raw text. The specific OCR engine is not specified without code verification.",
        },
        {
          name: "NLP Extraction",
          description:
            "Hugging Face Transformer models extract entities, classify document types, and identify structured fields from OCR-produced text.",
        },
        {
          name: "Data Persistence",
          description:
            "Extracted structured data is written to SQL Server. Processing status is tracked per document.",
        },
      ],
    },
    challenges: [
      "OCR accuracy varies significantly based on document quality, fonts, and scan resolution",
      "NLP model output requires validation — not all extractions are correct",
      "Building a robust pipeline that handles partial failures gracefully",
    ],
    githubUrl: null,
    demoUrl: null,
    featured: true,
    coverImage: "/DocumentOCR-AI_Img1.jpg",
    images: ["/DocumentOCR-AI_Img1.jpg", "/DocumentOCR-AI_Img2.png"],
    tags: ["OCR", "NLP", "Python", "AI/GenAI", "Document Processing"],
  },
  {
    id: "online-sports-manage",
    title: "Online Sports Management",
    category: "Web Application",
    type: "Independent Project",
    provenance: "Public GitHub repository: https://github.com/PrasadAdsul21/OnlineSportsManage",
    shortDescription:
      "A C# web application for managing sports-related records, built as an independent learning and portfolio project.",
    technologies: ["C#", ".NET", "SQL Server"],
    myContributions: [
      "Designed and implemented the application from scratch",
      "Built the data models and database interactions",
      "Implemented core CRUD functionality for sports management records",
    ],
    githubUrl: "https://github.com/PrasadAdsul21/OnlineSportsManage",
    demoUrl: null,
    featured: false,
    tags: [".NET", "C#", "Web Application"],
  },
];

export const SKILLS = {
  backend: {
    label: "Backend Engineering",
    icon: "Server",
    color: "from-indigo-500/20 to-indigo-500/5",
    border: "border-indigo-500/20",
    skills: [
      { name: "C# / .NET", level: "Primary" },
      { name: "ASP.NET Core Web API", level: "Primary" },
      { name: "Entity Framework Core", level: "Primary" },
      { name: "ADO.NET", level: "Working knowledge" },
      { name: "Clean Architecture", level: "Applied" },
      { name: "SOLID Principles", level: "Applied" },
    ],
  },
  api: {
    label: "API Design & Integration",
    icon: "Zap",
    color: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
    skills: [
      { name: "REST API Design", level: "Primary" },
      { name: "API Integration", level: "Primary" },
      { name: "Request/Response Validation", level: "Applied" },
      { name: "FastAPI (Python)", level: "Working knowledge" },
      { name: "Swagger / OpenAPI", level: "Applied" },
    ],
  },
  databases: {
    label: "Databases & Data Modeling",
    icon: "Database",
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
    skills: [
      { name: "SQL Server", level: "Primary" },
      { name: "PostgreSQL", level: "Working knowledge" },
      { name: "Neo4j (Graph)", level: "Working knowledge" },
      { name: "Data Modeling & Schema Design", level: "Applied" },
      { name: "OpenSearch", level: "Working knowledge" },
      { name: "MongoDB", level: "Familiar" },
    ],
  },
  frontend: {
    label: "Frontend Development",
    icon: "Layout",
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
    skills: [
      { name: "Angular", level: "Working knowledge" },
      { name: "TypeScript", level: "Working knowledge" },
      { name: "JavaScript", level: "Working knowledge" },
      { name: "HTML & CSS", level: "Working knowledge" },
      { name: "React / Next.js", level: "Learning" },
    ],
  },
  ai: {
    label: "AI & GenAI Integration",
    icon: "Brain",
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/20",
    skills: [
      { name: "Retrieval-Augmented Generation (RAG)", level: "Applied" },
      { name: "LLMs (Llama 3, OpenAI, Anthropic, Mistral)", level: "Applied" },
      { name: "Vector Search & Retrieval", level: "Applied" },
      { name: "LangChain", level: "Working knowledge" },
      { name: "Knowledge Graphs (Neo4j + GenAI)", level: "Applied" },
      { name: "NLP & OCR Pipelines", level: "Applied" },
      { name: "Hugging Face Transformers", level: "Working knowledge" },
      { name: "Python (AI/ML focus)", level: "Working knowledge" },
    ],
  },
  cloud: {
    label: "Cloud, Containers & DevOps",
    icon: "Cloud",
    color: "from-sky-500/20 to-sky-500/5",
    border: "border-sky-500/20",
    skills: [
      { name: "Docker", level: "Working knowledge" },
      { name: "Git & GitHub", level: "Primary" },
      { name: "AWS (basics)", level: "Familiar" },
      { name: "Azure (basics)", level: "Familiar" },
      { name: "CI/CD Pipelines", level: "Familiar" },
    ],
  },
};

export const ENGINEERING_PRINCIPLES = [
  {
    icon: "Layers",
    title: "Clean Architecture & Separation of Concerns",
    description:
      "I organize code in layers — Domain, Application, Infrastructure, and API — so that business rules are independent of infrastructure choices. This makes the codebase easier to test, maintain, and extend.",
  },
  {
    icon: "Shield",
    title: "SOLID Principles",
    description:
      "Single responsibility, open/closed, Liskov substitution, interface segregation, and dependency inversion guide how I design classes and modules in C# and .NET applications.",
  },
  {
    icon: "GitBranch",
    title: "REST API Design",
    description:
      "API endpoints should be predictable, well-documented, and versioned appropriately. I use proper HTTP verbs, status codes, and structured response shapes. Validation and error handling are explicit, not afterthoughts.",
  },
  {
    icon: "Database",
    title: "Database Modeling & Query Design",
    description:
      "Schema design should reflect the domain model and support the query patterns the application actually needs. I use EF Core migrations for schema management and pay attention to query performance.",
  },
  {
    icon: "Bug",
    title: "Error Handling & Observability",
    description:
      "Applications need meaningful error responses and structured logging to be debuggable in production. I implement consistent error handling patterns and structured logging rather than swallowing exceptions.",
  },
  {
    icon: "FlaskConical",
    title: "Testing Approach",
    description:
      "Unit tests for business logic and service-layer code, integration tests for API endpoints and database interactions. Test coverage supports refactoring and communicates expected behavior.",
  },
  {
    icon: "Cpu",
    title: "Containerization & Deployment",
    description:
      "Docker containers make application environments reproducible. I use containers for local development consistency and understand CI/CD pipeline concepts for automated build and deployment workflows.",
  },
  {
    icon: "Plug",
    title: "AI Service Integration",
    description:
      "AI capabilities — LLMs, retrieval, NLP — are integrated behind clear application interfaces rather than directly in business logic. This keeps AI services swappable and prevents tight coupling to any single provider.",
  },
];

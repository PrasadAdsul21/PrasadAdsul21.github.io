import {
  Layers,
  Shield,
  GitBranch,
  Database,
  Bug,
  FlaskConical,
  Cpu,
  Plug,
} from "lucide-react";
import { ENGINEERING_PRINCIPLES } from "@/lib/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  Layers: <Layers size={20} />,
  Shield: <Shield size={20} />,
  GitBranch: <GitBranch size={20} />,
  Database: <Database size={20} />,
  Bug: <Bug size={20} />,
  FlaskConical: <FlaskConical size={20} />,
  Cpu: <Cpu size={20} />,
  Plug: <Plug size={20} />,
};

export default function ApproachSection() {
  return (
    <section id="approach" className="section-padding" aria-labelledby="approach-heading">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-label justify-center">
            <span className="w-8 h-px bg-indigo-500" aria-hidden="true" />
            Engineering Approach
            <span className="w-8 h-px bg-indigo-500" aria-hidden="true" />
          </p>
          <h2 id="approach-heading" className="section-title">
            How I{" "}
            <span className="gradient-text">think about software</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Principles that guide how I design, implement, and maintain software systems —
            grounded in professional experience rather than abstract ideals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ENGINEERING_PRINCIPLES.map((principle, i) => (
            <div
              key={principle.title}
              className="card-glass-hover p-5 flex flex-col gap-4"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                {ICON_MAP[principle.icon] || <Shield size={20} />}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-slate-200 text-sm mb-2 leading-snug">
                  {principle.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Code snippet illustration */}
        <div className="mt-16 card-glass p-6 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/60" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" aria-hidden="true" />
            </div>
            <span className="text-xs text-slate-500 font-mono">clean-architecture-example.cs</span>
          </div>
          <pre className="text-xs font-mono text-slate-400 overflow-x-auto leading-relaxed">
            <code>{`// Application Layer: Use Case / Service
public class CreatePatientCaseService
{
    private readonly ICaseRepository _caseRepository;
    private readonly INotificationService _notifications;

    public CreatePatientCaseService(
        ICaseRepository caseRepository,
        INotificationService notifications)
    {
        _caseRepository = caseRepository;
        _notifications = notifications;
    }

    public async Task<Result<CaseId>> ExecuteAsync(
        CreateCaseCommand command,
        CancellationToken ct)
    {
        var validationResult = command.Validate();
        if (!validationResult.IsSuccess)
            return Result.Failure<CaseId>(validationResult.Error);

        var patientCase = PatientCase.Create(command);
        await _caseRepository.AddAsync(patientCase, ct);
        await _notifications.SendCaseCreatedAsync(patientCase.Id, ct);

        return Result.Success(patientCase.Id);
    }
}`}</code>
          </pre>
          <p className="mt-3 text-xs text-slate-600 italic">
            Illustrative example: business logic in the Application layer, not in the API controller. Domain entities are decoupled from infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}

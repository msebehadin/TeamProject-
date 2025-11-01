
import { teamData } from "./teamData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Team Member</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamData.map((group) => (
          <Card key={group.role} className="shadow-sm">
            <CardHeader>
              <CardTitle>{group.role}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {group.members.map((member) => (
                <div key={member.name} className="flex items-center gap-3">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    width={40}
                    height={40}
                    className="rounded-full border"
                  />
                  <span>{member.name}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;

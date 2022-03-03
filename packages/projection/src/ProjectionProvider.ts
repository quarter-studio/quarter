import { Provider } from "@quarter/support";
import { ProjectorManager } from "./ProjectorManager";

export class ProjectionProvider extends Provider {
  public register() {
    this.app.share("projector", () => {
      const config = this.app.config.from("projection.projector");
      return new ProjectorManager(config, this.app);
    });
  }
}

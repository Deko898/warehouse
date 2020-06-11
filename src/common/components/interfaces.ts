import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core";

export interface ITreeRoute {
    nodeId: string;
    name: string;
    linkTo?: string;
    iconType?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    children?: ITreeRoute[];
}
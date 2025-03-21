import { ConnectionProviderProps } from "@/providers/connection-provider"
import { EditorState } from "@/providers/editor-provider"
import { useTriggerXStore } from "@/store/store"
import ContentBasedOnTitle from "./content-based-on-title"

type Props = {
    state: EditorState
    nodeConnection: ConnectionProviderProps
}

const RenderOutputAccordion = ({ state, nodeConnection }: Props) => {
    const {
        googleFile,
        setGoogleFile,
        selectedSlackChannels,
        setSelectedSlackChannels,
    } = useTriggerXStore()
    return (
        <ContentBasedOnTitle
            nodeConnection={nodeConnection}
            newState={state}
            file={googleFile}
            setFile={setGoogleFile}
            selectedSlackChannels={selectedSlackChannels}
            setSelectedSlackChannels={setSelectedSlackChannels}
        />
    )
}

export default RenderOutputAccordion

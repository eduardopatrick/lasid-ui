
type Props = {
    /**
     * You can use the variant attribute to define the color of the light
     */
    variant: 'green' | 'red' | 'yellow'
};
/**
 * This is a light component that can be used to signal the state of a traffic light
 */
export const Light = ({variant = 'green' }: Props) => {
  return (
    <div style={{ background: variant, borderRadius: '50%', height: 50, width: 50}}></div>
  )
}

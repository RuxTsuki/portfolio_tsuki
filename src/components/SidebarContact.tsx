
import { DiscordSvg } from './icons/DiscordSvg';
import { GithubSvg } from './icons/GithubSvg';
import { LinkedinSvg } from './icons/LinkedinSvg';

export const SidebarContact = () => {
    return (
        <div className="fixed w-fit top-[50%] z-10">
            <div className='grid gap-2 w-fit bg-[#050816] p-2 rounded-r-xl'>
                <a href='https://github.com/Ruxtsuki' title='Github ' target='_blank'><GithubSvg className='aside-icon' /></a>
                <a href='https://www.linkedin.com/in/diego-bello-dev/' title='Linkedin' target='_blank'><LinkedinSvg className='aside-icon' /></a>
                <a href='https://discord.com/users/278272218461503498' title='Contactame en Discord' target='_blank'><DiscordSvg className='aside-icon' /></a>
            </div>
        </div>
    )
}

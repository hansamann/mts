// For adding yourself, look at the bottom of this file.

export interface Member {
    name: string;
    pronouns: string;
    img: string;
    linkedin: string; //required
    mastodon?: string; //optional
    github?: string; //optional
    matrix?: string; //optional
}

export function loadMembers(): Member[] {
    const members: Member[] = [
        {
            name: 'Sven Haiges',
            pronouns: 'he/him/his',
            img: '/members/hansamann.png',
            linkedin: 'https://www.linkedin.com/in/hansamann',
            mastodon: 'https://mastodon.social/@hansamann',
            github: 'https://github.com/hansamann',
            matrix: 'https://matrix.to/#/@hansamann19:matrix.org'
        },
        {
            name: 'Alan Kochev',
            pronouns: 'he/him/his',
            img: '/members/alaija.png',
            linkedin: 'https://linkedin.com/in/alaija',
            mastodon: 'https://mas.to/@alaija',
            github: 'https://github.com/alaija'
        },
        /*
         * To add yourself, copy the aboze block as an example and paste it below.
         * Then, change the values to your own. Keep in mind LinkedIn is required, as well as name, 
         * pronouns and img.
         * 
         * The fields mastodon, github and matrix are optional.
         * 
         * Once you are done safe and commit to your cloned repo. Then create a pul
         * request to the original repo. Once reviewed, your changes will be merged and 
         * the website will be updated.
         * 
         */
        {
            name: 'You?',
            pronouns: 'she/her/hers',
            linkedin: 'https://www.linkedin.com/in/yourname',
            img: '/members/user.png'
        },
    ];
    return members;
}
import Image from 'next/image';
import profilePhoto from './blank-profile-picture.png';
export default function AboutPage() {
  return (
    <>
      <article className="flex gap-3  justify-center">
        <Image
          src={profilePhoto}
          width={400}
          height={400}
          alt="profile"
          loading="eager"
        />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat
          doloremque distinctio exercitationem, tenetur sequi facilis a! Animi
          sequi ipsa, nam voluptatibus ullam corrupti nulla tenetur explicabo
          rerum reprehenderit porro!
        </div>
      </article>
    </>
  );
}

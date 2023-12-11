import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import { Loader, Notification, TNotification } from "@features/ui";
import styles from "./project-list.module.scss";

export function ProjectList() {
  const { data, isLoading, isError, error, refetch } = useGetProjects();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <Notification
        type={TNotification.error}
        text={error.message}
        iconSrc="/icons/alert-circle.svg"
        onClick={refetch}
      />
    );
  }

  return (
    <ul className={styles.list}>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}

import './Skills.css';
import ReactTooltip from 'react-tooltip';
import ReactPng from './assets/react.svg';
import AngularPng from './assets/angular.png';
import ReduxPng from './assets/redux.png';
import RxjsPng from './assets/rxjs.png';
import TypescriptPng from './assets/typescript.png';
import SassPng from './assets/sass.png';
import DotNetPng from './assets/dotnet.png';
import NodeJsPng from './assets/nodejs.jpg';
import RabbitMqPng from './assets/rabbitmq.png';
import EntityFrameworkPng from './assets/entity-framework.png';
import TypeOrmPng from './assets/typeorm.png';
import AzurePortalPng from './assets/azure.png';
import AzureDevopsPng from './assets/dev-ops.png';
import YamlPng from './assets/yaml.png';
import AzureCliPng from './assets/azure-cli.png';
import GcsPng from './assets/gcs.png';
import GitPng from './assets/git.png';
import BashPng from './assets/bash.png';
import PowershellPng from './assets/powershell.png';
import DockerPng from './assets/docker.png';
import EsLintPng from './assets/es-lint.png';
import ResharperPng from './assets/resharper.png';
import PostmanPng from './assets/postman.png';

function Skills() {
  return (
    <div>
      <h2 className="skill-container-heading">Skills</h2>
      <div className="skill-container">
        <img src={ReactPng} alt="react" data-tip="React" />
        <img src={AngularPng} alt="angular" data-tip="Angular" />
        <img src={ReduxPng} alt="redux" data-tip="Redux" />
        <img src={RxjsPng} alt="rxjs" data-tip="RxJs" />
        <img src={TypescriptPng} alt="typescript" data-tip="Typescript" />
        <img src={SassPng} alt="sass" data-tip="CSS/SASS" />
        <img src={DotNetPng} alt="dot net" data-tip=".Net Core" />
        <img src={NodeJsPng} alt="nodejs" data-tip="NodeJs" />
        <img src={RabbitMqPng} alt="rabbit mq" data-tip="Rabbit MQ" />
        <img
          src={EntityFrameworkPng}
          alt="entity framework"
          data-tip="Entity Framework"
        />
        <img src={TypeOrmPng} alt="type orm" data-tip="Type ORM" />
        <img src={AzurePortalPng} alt="azure portal" data-tip="Azure Portal" />
        <img src={AzureDevopsPng} alt="azure devops" data-tip="Azure Dev Ops" />
        <img src={YamlPng} alt="yaml" data-tip="Yaml" />
        <img src={AzureCliPng} alt="azure cli" data-tip="Azure CLI" />
        <img src={GcsPng} alt="gcs" data-tip="Google Cloud Platform" />
        <img src={GitPng} alt="git" data-tip="Git" />
        <img src={BashPng} alt="bash" data-tip="Bash" />
        <img src={PowershellPng} alt="powershell" data-tip="Powershell" />
        <img src={DockerPng} alt="docker" data-tip="Docker" />
        <img src={EsLintPng} alt="es lint" data-tip="Es / TS Lint" />
        <img src={ResharperPng} alt="resharper" data-tip="Resharper" />
        <img src={PostmanPng} alt="postman" data-tip="Postman" />
      </div>
      <ReactTooltip />
    </div>
  );
}

export default Skills;

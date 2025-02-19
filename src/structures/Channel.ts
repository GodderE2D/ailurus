import type { Client } from '#client/Client';
import { Base } from '#structures/Base';
import type { APIChannel } from 'discord-api-types/v10';
import type { Guild } from './Guild';

export class Channel extends Base {
	public id: string;

	public constructor(data: APIChannel, public guild: Guild, client: Client) {
		super(client);

		this.id = data.id;
	}
}

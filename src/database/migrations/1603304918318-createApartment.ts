import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createApartment1603304918318 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "apartments",
            columns:[
                {
                    name:'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'titulo',
                    type: 'varchar'
                },
                {
                    name: 'descricao',
                    type: 'varchar'
                },
                {
                    name: 'nrApto',
                    type: 'varchar'
                },
                {
                    name: 'nmPredio',
                    type: 'varchar'
                },
                {
                    name: 'nrTorre',
                    type: 'integer'
                },
                {
                    name: 'preco',
                    type: 'decimal'
                },
                {
                    name: 'cond',
                    type: 'decimal'
                },
                {
                    name: 'iptu',
                    type: 'decimal'
                },
                {
                    name: 'bairro',
                    type: 'varchar'
                },
                {
                    name: 'dtVenc',
                    type: 'date'
                },
                {
                    name: 'aUtil',
                    type: 'decimal'
                },
                {
                    name: 'vGaragem',
                    type: 'integer'
                },
                {
                    name: 'banh',
                    type: 'integer'
                },
                {
                    name: 'suite',
                    type: 'integer'
                },
                {
                    name: 'dorm',
                    type: 'integer'
                },
                {
                    name: 'churras',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'piscina',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'playground',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'poli',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'sFestas',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'sauna',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'sJogos',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'ativo',
                    type: 'boolean',
                    default: false,
                },
                
            ]
        }))
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('apartments');
    }

}

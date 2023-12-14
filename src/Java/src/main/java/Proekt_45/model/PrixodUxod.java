package Proekt_45.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt_45.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ПриходУход
 */
@Entity(name = "IISProekt_45ПриходУход")
@Table(schema = "public", name = "ПриходУход")
public class PrixodUxod {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Статус")
    private String статус;

    @Column(name = "ВрПриУх")
    private String врприух;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Raspisanie")
    @Convert("Raspisanie")
    @Column(name = "Расписание", length = 16, unique = true, nullable = false)
    private UUID _raspisanieid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Raspisanie", insertable = false, updatable = false)
    private Raspisanie raspisanie;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SpravUch")
    @Convert("SpravUch")
    @Column(name = "СправУч", length = 16, unique = true, nullable = false)
    private UUID _spravuchid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SpravUch", insertable = false, updatable = false)
    private SpravUch spravuch;


    public PrixodUxod() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getСтатус() {
      return статус;
    }

    public void setСтатус(String статус) {
      this.статус = статус;
    }

    public String getВрПриУх() {
      return врприух;
    }

    public void setВрПриУх(String врприух) {
      this.врприух = врприух;
    }


}